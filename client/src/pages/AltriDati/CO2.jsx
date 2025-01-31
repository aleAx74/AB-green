import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import './altriDati.css';
function CO2() {
  const [datiJson, setDatiJson] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/CO2');
        const data = await response.json();
        console.log(data);
        setDatiJson(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };

    fetchData(); 
  }, []);

  const th = [
    { contenuto: "Nazione", dataCell: "Nazione" },
    { contenuto: "Produzione Totale [Tonnellate]", dataCell: "Produzione Totale [Tonnellate]" }
  ];

  const datiFiltrati = datiJson.filter(item => item.Year === 2023);

  const tr = datiFiltrati.map(item => [
    { contenuto: item.Entity },
    { contenuto: item.Total }
  ]);

  return (
    <div style={{width: "100%"}}>
      <h2>Dati CO2 - Anno 2023</h2>
      {datiFiltrati.length > 0 ? (
        <Table th={th} tr={tr} />
      ) : (
        <p>Non ci sono dati per l'anno 2023.</p>
      )}
    </div>
  );
}

export default CO2;
