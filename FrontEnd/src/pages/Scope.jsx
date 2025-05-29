import DraggableMenu from "../components/Drag_menu/DraggableMenu";
import ariaImg from '../assets/aria.jpg';
import acquaImg from '../assets/acqua.jpg';
import energiaImg from '../assets/energia.jpg';
import climaImg from '../assets/clima.jpg';

function Scope() {
    const contents =[
        {
            id: 1,
            nome: "Clima",
            img: climaImg,
            link: "https://unric.org/it/obiettivo-13-promuovere-azioni-a-tutti-i-livelli-per-combattere-il-cambiamento-climatico/",
            text: "I problemi del Clima rientrano negli Obiettivi dell' Agenda 2030 per lo Sviluppo Sostenibile, in particolare nell'Obiettivo 13 \"Promuovere azioni, a tutti i livelli, per combattere il cambiamento climatico\"."
        },
        {
            id: 2,
            nome: "Aria",
            img: ariaImg,
            link: "https://unric.org/it/obiettivo-11-rendere-le-citta-e-gli-insediamenti-umani-inclusivi-sicuri-duraturi-e-sostenibili/",
            text: "Il monitoraggio della qualità dell'aria è uno degli strumenti indispensabili per il raggiungimento dell'obiettivo 11 dell'Agenda 2030 Rendere le città e gli insediamenti umani inclusivi e sostenibili."
        },
        {
            id: 3,
            nome: "Acqua",
            img: acquaImg,
            link: "https://unric.org/it/obiettivo-6-garantire-a-tutti-la-disponibilita-e-la-gestione-sostenibile-dellacqua-e-delle-strutture-igienico-sanitarie/",
            text: "La salvaguardia delle risorse idriche rientra in due obiettivi dell'Agenda 2030: l'obiettivo 6 Garantire a tutti la disponibilità e la gestione sostenibile dell’acqua e delle strutture igienico-sanitarie e l'Obiettivo 15 Proteggere, ripristinare e favorire un uso sostenibile dell’ecosistema terrestre."
        },
        {
            id: 4,
            nome: "Energia",
            img: energiaImg,
            link: "https://unric.org/it/obiettivo-7-assicurare-a-tutti-laccesso-a-sistemi-di-energia-economici-affidabili-sostenibili-e-moderni/",
            text: "L'obiettivo 7 punta ad \"Assicurare a tutti l’accesso a sistemi di energia economici, affidabili, sostenibili e moderni\"."
        }
    ]
    return (<>
        <center ><h1 style={{marginTop: "-35vh"}}>Our interests</h1></center>
        <div id="fade">
            <DraggableMenu imgs={contents} />
        </div>
    </> );
  }
  
  export default Scope;
  
  