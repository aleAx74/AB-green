import Card from "../components/Card/Card";
function Data() {

  const data = [
    {
      id: 1,
      img: "https://img.freepik.com/premium-vector/illustration-thermometer-showing-high-temperature-alongside-representation-earth_968957-2547.jpg",
      title: "Variazione media della temperatura terrestre",
      paragrafo: "Dal 2010 al 2018, la temperatura terrestre media ha registrato un costante aumento rispetto ai valori storici. Il 2016 è stato l'anno più caldo con un aumento di +0.99°C rispetto alla media storica. Questo fenomeno evidenzia un trend globale di riscaldamento climatico.",
      link: "/altriDati/Temperatura"
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-co2-illustration_23-2149391636.jpg?semt=ais_incoming",
      title: "Emissioni di CO₂ nel settore agricolo",
      paragrafo: "Le principali fonti di emissione di CO₂ nell'agricoltura includono la combustione non allocata di carburanti (7.8%), le emissioni da bestiame e letame (5.8%), e quelle legate al suolo agricolo (4.1%). Altre fonti, come il raccolto bruciato e i terreni forestali, contribuiscono in misura minore.",
      link: "/altriDati/CO2"
    },
    {
      id: 3,
      img: "https://us.123rf.com/450wm/robuart/robuart2402/robuart240200500/225674241-waste-pollution-vector-illustration-waste-management-is-key-to-mitigating-negative-environmental.jpg?ver=6",
      title: "Inquinamento marino",
      paragrafo: "La plastica rappresenta il principale materiale inquinante negli oceani, contribuendo al 61.3% dell'inquinamento. Seguono le plastiche provenienti da attività di pesca (8.9%) e altri materiali come legname, metalli e vetro-ceramiche, con percentuali minori.",
      link: "/altriDati/Acque"
    },
    {
      id: 4,
      img: "https://static.vecteezy.com/system/resources/previews/015/584/215/non_2x/icon-sticker-poster-on-the-theme-of-saving-and-renewable-energy-with-earth-planet-wind-turbine-solar-panels-houses-and-trees-vector.jpg",
      title: "Energia da fonti rinnovabili",
      paragrafo: "Nel 2019, Islanda e Norvegia si distinguono per la quota di energia rinnovabile sul consumo totale (rispettivamente 78.2% e 74.6%). L'Italia, con una quota del 18.2%, si posiziona al di sotto di paesi come Finlandia (43.1%) e Albania (36.7%), ma sopra il Regno Unito (12.3%).",
      link: "/altriDati/EnergiaRinnovabile"
    },
  ]

    return (<>
    <h1 style={{ textAlign: "center", marginLeft: "50%", transform: "translateX(-50%)"}}>Datas</h1>
        <p className="p" style={{width: "70%", margin: "3vh 50%", transform: "translateX(-50%)", }}>Questa pagina presenta un'analisi dei dati ambientali e statistici relativi ai cambiamenti climatici, alle emissioni di gas serra e all'inquinamento. Attraverso i numeri, emergono le dinamiche che caratterizzano il riscaldamento globale, l'impatto delle attività umane sull'ecosistema e i progressi nell'adozione di energie rinnovabili. Questi dati offrono uno spunto per comprendere le sfide ambientali e le possibili soluzioni per un futuro sostenibile. </p>
      <div className="fade" id="grid" style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2vh", width: "90%", marginLeft: "50%", transform: "translateX(-50%)"}}>
        {
          data.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} paragrafo={card.paragrafo} link={card.link}>

            </Card>
          ))
        }
      </div> 
    </>
    
    );
  }
  
  export default Data;
