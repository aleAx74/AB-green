const express = require('express');
const cors = require('cors');
const txt2json = require("txt-file-to-json");
const path = require('path');
const fs = require('fs');
const corsOption = {}
const app = express();
const PORT = 80;

app.use(cors());

app.use(express.json());

app.get('/api/data/Temperature', async (req, res) => {
  try {
    const jsonData = await txt2json({ filePath: path.join(__dirname, "./data/Temperatura.txt") });
    res.json(jsonData);
  } catch (error) {
    console.error("Errore nel caricamento del file Temperatura:", error);
    res.status(500).json({ error: "Errore nel caricamento dei dati Temperatura" });
  }
});


const readJsonFile = async (fileName, res) => {
    try {
        const filePath = path.join(__dirname, 'data', fileName);
        const data = await fs.promises.readFile(filePath, 'utf-8');
        res.json(JSON.parse(data));
    } catch (err) {
        console.error(`Error handling ${fileName} data:`, err);
        res.status(500).json({ error: `Failed to retrieve ${fileName} data` });
    }
};

app.get('/api/data/:type', (req, res) => {
    const { type } = req.params;
    const fileMap = {
        CO2: 'CO2.json',
        Acqua: 'acqua.json',
        Energy: 'energy.json'
    };

    const fileName = fileMap[type];
    if (!fileName) {
        return res.status(400).json({ error: "Invalid data type requested" });
    }

    readJsonFile(fileName, res);
});


app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
