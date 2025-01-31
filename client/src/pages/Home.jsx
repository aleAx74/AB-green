import { useNavigate, Link } from 'react-router-dom';
import './style/Home.css'
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <>
        <div className="grid" id="fade" style={{marginTop: "10vh", marginLeft: "10vh"}}>
        <div style={{marginTop: "10vh"}}>
          <h1>AB-Green</h1>
          <p>
          Siamo un’organizzazione impegnata nella tutela dell’ambiente, ispirata ai principi dell’Agenda 2030 per lo Sviluppo Sostenibile. Questo programma d’azione, adottato nel settembre 2015 dai 193 Paesi membri delle Nazioni Unite, mira a promuovere il benessere delle persone, la salvaguardia del pianeta e la crescita economica sostenibile.

L'Agenda 2030 si articola in 17 Obiettivi per lo Sviluppo Sostenibile, suddivisi in 169 traguardi specifici, che delineano un quadro globale per affrontare le sfide ambientali, sociali ed economiche del nostro tempo.

Attraverso il nostro sito, è possibile approfondire queste tematiche e accedere a dati e statistiche aggiornate sulla qualità dell’aria e dell’acqua a livello globale.
          </p>
          <center><a target='_blank' href='https://unric.org/it/agenda-2030/'><button style={{background: "#34a0a4", width: "50vh", marginTop: "5vh"}}>Agenda 2030</button></a></center>
        </div><div>
        
        <img style={{width: "60vh"}} src="https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-logos-of-green-tree-leaf-ecology-nature-element-vector-png-image_5123066.png" alt="" />
        </div>
        </div>
        
    </>
  );
}

export default Home;
