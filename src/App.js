import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contacto from './components/Contacto';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Detalle from './components/Detalle';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/proyectos" element={<Proyectos />}></Route>
          <Route path="/proyectos/:id" element={<Detalle />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
