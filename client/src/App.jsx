import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Scope from './pages/Scope';
import Data from './pages/Data';
import About from './pages/About';
import Nav from './components/Nav/Nav';
import Temperatura from './pages/AltriDati/Temperatura';
import CO2 from './pages/AltriDati/CO2.jsx';
import Energia from './pages/AltriDati/Energia.jsx';
import Acque from './pages/AltriDati/Acque.jsx';

function AppContent() {
  const location = useLocation();

  const bodyClass = location.pathname.startsWith('/altriDati') ? 'body' : '';

  return (
    <div className={bodyClass}>
      <Nav links={[
        { id: 1, url: "/", content: "Home" },
        { id: 2, url: "/scope", content: "Our Scope" },
        { id: 3, url: "/data", content: "Datas" },
        { id: 4, url: "/about", content: "About" },
      ]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/data" element={<Data />} />
        <Route path="/about" element={<About />} />
        <Route path="/altriDati/CO2" element={<CO2 />} />
        <Route path='/altriDati/Acque' element={<Acque/>} />
        <Route path="/altriDati/Temperatura" element={<Temperatura />} />
        <Route path="altriDati/EnergiaRinnovabile" element={<Energia />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
