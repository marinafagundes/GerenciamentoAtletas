import React, { useState } from 'react';
import NavBar from './components/NavBar';
import CadastroAtleta from './components/CadastroAtleta';
import Login from './components/Login';
import Perfil from './components/Perfil';
import ConsultaAtleta from './components/ConsultaAtleta';
import './App.css';

function App() {
    // Define a seção atual, que será alterada pelo NavBar
    const [section, setSection] = useState("cadastro");

    return (
        <div className="appContainer">
            {/* Barra de navegação */}
            <NavBar setSection={setSection} />

            {/* Conteúdo dinâmico baseado na seção */}
            <div className="sectionContent">
                {section === "cadastro" && <CadastroAtleta />}
                {section === "login" && <Login />}
                {section === "perfil" && <Perfil username="user_test" />}
                {section === "consulta" && <ConsultaAtleta />}
            </div>
        </div>
    );
}

export default App;
