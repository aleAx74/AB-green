import './Card.css';
import { Link } from 'react-router-dom';

function Card({img, title, paragrafo, link}){
    return <>
        <div className="mainConteiner">
                    <div className="carta">
                        <div className="fronte" style={{backgroundImage: `url(${img})`, backgroundSize: "cover"}}></div>
                        <div className="retro">
                            <center>
                                <h2>{title}</h2>

                                <p>
                                    {paragrafo}
                                </p>

                                <Link to={link}><button>Altri dati</button></Link>
                            </center>
                        </div>
                    </div>
                </div>

        
         
        
    </>
}

export default Card;