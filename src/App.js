import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contacto from './components/Contacto';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Detalle from './components/Detalle';
import ErrorPage from './components/ErrorPage';
import BotonWhatsapp from './components/BotonWhatsapp';




function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/proyectos" element={<Proyectos />}></Route>
          <Route path="/proyectos/:id" element={<Detalle />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <BotonWhatsapp></BotonWhatsapp>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
