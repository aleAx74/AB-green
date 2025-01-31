import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table"; 
import './altriDati.css';

function Temperatura() {
  const [datiJson, setDatiJson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/Temperature');
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
    { contenuto: "Anno", dataCell: "Anno" },
    { contenuto: "Gradi Celsius", dataCell: "Gradi Celsius" }
  ];

  const tr = [...datiJson].reverse().map(item => [
    { contenuto: item.Year },
    { contenuto: item.Mean }
  ]);

  return (
    <div style={{width: "100%"}}>
      <h2>Dati Temperatura</h2>
      {datiJson.length > 0 ? (
        <Table th={th} tr={tr} />
      ) : (
        <p>Caricamento in corso...</p> 
      )}
    </div>
  );
}

export default Temperatura;
