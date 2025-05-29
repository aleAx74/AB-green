import express from "express";
import cors from "cors";
import { CO2Model, TemperatureModel, EnergyModel, WaterModel } from "./connessione.js";

const app = express();
const PORT = 80;

app.use(cors());
app.use(express.json());

app.get("/api/data/:type", async (req, res) => {
  const { type } = req.params;

  const modelMap = {
    CO2: CO2Model,
    Temperature: TemperatureModel,
    Energy: EnergyModel,
    Water: WaterModel
  };

  const Model = modelMap[type];
  if (!Model) {
    return res.status(400).json({ error: "Tipo di dato non valido" });
  }

  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    console.error(`Errore nel recupero dei dati ${type}:`, error);
    res.status(500).json({ error: `Errore nel caricamento dei dati ${type}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
