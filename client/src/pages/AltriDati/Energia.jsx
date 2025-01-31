import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import './altriDati.css';
function Energia() {
  const [datiJson, setDatiJson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/Energy');
        const data = await response.json();
        console.log(data);
        setDatiJson(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };

    fetchData(); 
  }, []);
  
  const dati = datiJson.filter(item => item.Year === 2021);
  const th = [
    { contenuto: "Nazione", dataCell: "Nazione" },
    { contenuto: "Produzione (% energia primaria equivalente)", dataCell: "Produzione (% energia primaria equivalente)" }
  ];


  const tr = dati.map(item => [
    { contenuto: item.Entity },
    { contenuto: item["Renewables (% equivalent primary energy)"] }
  ]);

  return (
    <div style={{width: "100%"}}>
      <h2>Dati Energia - Anno 2021</h2>
      {dati.length > 0 ? (
        <Table th={th} tr={tr} />
      ) : (
        <p>Non ci sono dati per l'anno 2021.</p>
      )}
    </div>
  );
}

export default Energia;
