import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Entrar from './pages/Entrar/Entrar';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Inicial from './pages/Inicial/Inicial';
import Chamado from './pages/Chamado/Chamado';
import ChamarForn from './pages/ChamarForn/ChamarForn';
import Chatbot from './pages/Chatbot/Chatbot';
import Conta from './pages/Conta/Conta';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entrar" element={<Entrar />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/inicial" element={<Inicial />} />
                <Route path="/chamado" element={<Chamado />} />
                <Route path="/chamarforn" element={<ChamarForn />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/conta" element={<Conta />} />
            </Routes>
        </Router>
    );
}

export default App;
