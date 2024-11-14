import React, { useState } from 'react'; // Importa os hooks do React para gerenciar o estado
import NavBar from './components/NavBar'; // Importa o componente de navegação
import CadastroAtleta from './components/CadastroAtleta'; // Importa o componente de cadastro de atleta
import Login from './components/Login'; // Importa o componente de login
import Perfil from './components/Perfil'; // Importa o componente de perfil de usuário
import ConsultaAtleta from './components/ConsultaAtleta'; // Importa o componente de consulta de atleta
import './App.css'; // Importa o arquivo de estilos

/**
 * Componente principal da aplicação.
 * Gerencia o estado de navegação entre as seções, controle de login e renderização condicional dos componentes.
 */
function App() {
    /**
     * Estado que define qual seção está sendo exibida.
     * As seções possíveis são: "cadastro", "login", "perfil", "consulta".
     */
    const [section, setSection] = useState("consulta"); // Inicia na tela de consulta

    /**
     * Estado que armazena o nome do usuário logado.
     * Se o usuário não estiver logado, o valor é null.
     */
    const [username, setUsername] = useState(null); // Armazena o nome do usuário logado

    /**
     * Verifica se o usuário está logado com base na variável `username`.
     * Se `username` tiver um valor, o usuário está logado.
     */
    const isLoggedIn = !!username;

    /**
     * Função que gerencia o login do usuário.
     * 
     * @param {string} user - Nome do usuário logado.
     */
    const handleLogin = (user) => {
        setUsername(user); // Armazena o nome do usuário
        setSection("perfil"); // Redireciona para a seção de perfil após o login
    };

    /**
     * Função que gerencia o logout do usuário.
     * Reseta o nome de usuário e retorna para a seção de login.
     */
    const handleLogout = () => {
        setUsername(null); // Remove o nome de usuário, desconectando o usuário
        setSection("login"); // Redireciona para a seção de login após o logout
    };

    return (
        <div className="appContainer"> {/* Contêiner principal da aplicação */}
            <NavBar 
                setSection={setSection} 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout} 
            />

            {/* Contêiner para renderizar o conteúdo da seção */}
            <div className="sectionContent">
                {/* Renderiza o componente de cadastro de atleta se a seção for 'cadastro' */}
                {section === "cadastro" && <CadastroAtleta />}
                {/* Renderiza o componente de login se a seção for 'login' */}
                {section === "login" && <Login onLogin={handleLogin} />}
                {/* Renderiza o componente de perfil se a seção for 'perfil' e o usuário estiver logado */}
                {section === "perfil" && isLoggedIn && <Perfil username={username} onLogout={handleLogout} />}
                {/* Renderiza o componente de consulta de atleta se a seção for 'consulta', sempre acessível */}
                {section === "consulta" && <ConsultaAtleta />}
            </div>
        </div>
    );
}

export default App;
