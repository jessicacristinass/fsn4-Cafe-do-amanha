import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Inicio from './Telas/Inicio';
import SobreNos from './Telas/SobreNos';
import Menu from './Telas/Menu';
import Pedidos from './Telas/Pedidos';
import Historias from './Telas/Historias';
import Contato from './Telas/Contato';
import NotFound from './Telas/NotFound';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SobreNos' element={<SobreNos />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Pedidos' element={<Pedidos />} />
        <Route path='/Historias' element={<Historias />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
