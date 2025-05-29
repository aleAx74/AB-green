import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import Loader3D from "../../components/Caricamento/Loader"; 
import './altriDati.css';

function Energia() {
  const [datiJson, setDatiJson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/Energy');
        const data = await response.json();
        console.log(data);
        setDatiJson(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); 
  }, []);
  
  const dati = Array.isArray(datiJson)
    ? datiJson.filter(item => item.Year === 2021)
    : [];

  const th = [
    { contenuto: "Nazione", dataCell: "Nazione" },
    { contenuto: "Produzione (% energia primaria equivalente)", dataCell: "Produzione (% energia primaria equivalente)" }
  ];

  const tr = dati.map(item => [
    { contenuto: item.Entity },
    { contenuto: item["Renewables (% equivalent primary energy)"] }
  ]);

  return (
    <div style={{width: "100%", minHeight: "80vh"}}>
      <h2>Dati Energia - Anno 2021</h2>
      {isLoading ? (
        <Loader3D />
      ) : dati.length > 0 ? (
        <Table th={th} tr={tr} />
      ) : (
        <p>Non ci sono dati per l'anno 2021.</p>
      )}
    </div>
  );
}

export default Energia;
