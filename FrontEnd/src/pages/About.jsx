import React from 'react';
import './style/About.css';

export function About() {
  return (
    <div style={{width: "100%", height: "100vh"}} className='ma'>
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Siamo felici che tu abbia scelto di esplorare il nostro spazio dedicato alle energie rinnovabili e alla sostenibilità. La nostra missione è sensibilizzare e informare riguardo all'importanza delle energie pulite, nonché ai dati vitali che riguardano le emissioni di CO2, i gas serra e l'inquinamento. Il nostro obiettivo è fornire informazioni accurate e aggiornate per aiutarti a comprendere meglio il nostro impatto sul pianeta e come possiamo tutti contribuire a un futuro più verde. Ogni visita e ogni interazione contano: grazie per essere parte del cambiamento verso un mondo più sostenibile! Continua a seguirci per scoprire più dati, tendenze e soluzioni ecologiche che possono fare la differenza. Ogni piccolo passo conta!
        </p>
        <h4>Insieme possiamo fare la differenza!</h4>
      </div>

      <div className="social-links">
        <h2>Seguici su:</h2>
        <ul className='ul'>
          <a href="https://www.instagram.com/">
            <li>
              <i className="bi bi-instagram"> </i>Instagram
            </li>
          </a>

          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dit_IT">
            <li>
              <i className="bi bi-facebook"> </i>Facebook
            </li>
          </a>

          <a href="https://github.com/">
            <li>
              <i className="bi bi-github"> </i>GitHub
            </li>
          </a>

          <a href="https://x.com/?lang=it">
            <li>
              <i className="bi bi-twitter-x"> </i>Twitter-x
            </li>
          </a>

          
          
        </ul>
      </div>
    </div></div>
  );
}

export default About;
