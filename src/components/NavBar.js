import React from 'react';
import styles from './NavBar.module.css';

/**
 * Componente NavBar
 * 
 * @param {Object} props - Propriedades recebidas pelo componente.
 * @param {Function} props.setSection - Função de callback usada para definir a seção ativa no aplicativo.
 * @param {boolean} props.isLoggedIn - Estado que indica se o usuário está logado, controlando a exibição condicional dos links "Perfil" e "Logout".
 * @param {Function} props.onLogout - Função de callback executada quando o usuário clica no botão "Logout".
 * 
 * Este componente renderiza uma barra de navegação que permite alternar entre diferentes seções do aplicativo.
 * - **"Cadastro"**: Alterna para a seção de cadastro.
 * - **"Login"**: Alterna para a seção de login.
 * - **"Perfil"**: Exibido apenas se o usuário está logado. Alterna para a seção de perfil do usuário.
 * - **"Consulta"**: Alterna para a seção de consulta.
 * - **"Logout"**: Exibido apenas se o usuário está logado. Executa a função de logout fornecida por `onLogout`.
 */
function NavBar({ setSection, isLoggedIn, onLogout }) {
    return (
        <nav className={styles.navbar}>
            {/* Logotipo e título da aplicação */}
            <div className={styles.logoContainer}>
                <img src="/logo.png" alt="Sportify Logo" className={styles.logo} />
                <h2 className={styles.logoText}>Sportify</h2> {/* Texto em branco para contraste */}
            </div>

            {/* Links de navegação */}
            <ul className={styles.navLinks}>
                <li onClick={() => setSection("cadastro")}>Cadastro</li>
                <li onClick={() => setSection("login")}>Login</li>

                {/* Exibe "Perfil" somente se o usuário estiver logado */}
                {isLoggedIn && <li onClick={() => setSection("perfil")}>Perfil</li>}

                <li onClick={() => setSection("consulta")}>Consulta</li>

                {/* Exibe "Logout" somente se o usuário estiver logado */}
                {isLoggedIn && <li onClick={onLogout} className={styles.logout}>Logout</li>}
            </ul>
        </nav>
    );
}

export default NavBar;
