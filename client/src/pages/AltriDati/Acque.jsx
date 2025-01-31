import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import './altriDati.css';
function Acque() {
  const [datiJson, setDatiJson] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/Acqua');
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
    { contenuto: "Data", dataCell: "Data" },
    { contenuto: "Parametro", dataCell: "Parametro" },
    { contenuto: "Valore", dataCell: "Valore" },
    { contenuto: "Limiti di legge", dataCell: "Limiti di legge"}
  ];

  const tr = datiJson.map(item => [
    { contenuto: `${new Date(item.dataCaricamento.split("T")[0]).toLocaleDateString("it-IT")}`},
    { contenuto: item.parametroMisurato },
    { contenuto: item.valoreRilevato },
    { contenuto: item.limitiLegge }
  ]);
  
  return (
    <div style={{width: "100%"}}>
      <h2>Analisi dell'acqua del comune di milano</h2>
      {datiJson.length > 0 ? (
        <Table th={th} tr={tr} />
      ) : (
        <p>Non ci sono dati</p>
      )}
    </div>
  );
}

export default Acque;
