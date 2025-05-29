import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table"; 
import './altriDati.css';
import Loader from "../../components/Caricamento/Loader";

function Temperatura() {
  const [datiJson, setDatiJson] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/Temperature');
        const data = await response.json();
        console.log(data);
        setDatiJson(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
      } finally {
        setLoading(false);
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
    <div style={{width: "100%", minHeight: "80vh"}}>
      <h2>Dati Temperatura</h2>
      {loading ? (
        <>
          <Loader/>
        </>
      ) : (
        <Table th={th} tr={tr} />
      )}
    </div>
  );
}

export default Temperatura;
