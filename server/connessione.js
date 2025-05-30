import mongoose from "mongoose";
require('dotenv').config();

const mongoURI = process.env.URL;

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Database connesso a AB-green...");
  })
  .catch((error) => {
    console.error("Errore di connessione:", error);
  });

const CO2Schema = new mongoose.Schema({
  Entity: { type: String, required: true },
  Code: { type: String },
  Year: { type: Number, required: true },
  Total: { type: Number, required: true }
});

const TemperatureSchema = new mongoose.Schema({
  Year: { type: String, required: true },
  Mean: { type: String, required: true },
  Lowess: { type: String, required: true }
});

const EnergySchema = new mongoose.Schema({
  Entity: { type: String, required: true },
  Code: { type: String },
  Year: { type: Number, required: true },
  "Renewables (% equivalent primary energy)": { type: Number, required: true }
});

const WaterSchema = new mongoose.Schema({
  parametroMisurato: { type: String, required: true },
  limitiLegge: { type: String, required: true },
  valoreRilevato: { type: String, required: true },
  unitaMisura: { type: String, required: true },
  zonaNome: { type: String, required: true },
  zonaId: { type: Number, required: true },
  mese: { type: String, required: true },
  anno: { type: Number, required: true },
  dataCaricamento: { type: Date, required: true },
  info: { type: String }
});

const CO2Model = mongoose.model("CO2", CO2Schema);
const TemperatureModel = mongoose.model("Temperature", TemperatureSchema);
const EnergyModel = mongoose.model("Energy", EnergySchema);
const WaterModel = mongoose.model("Water", WaterSchema);

export { CO2Model, TemperatureModel, EnergyModel, WaterModel };
