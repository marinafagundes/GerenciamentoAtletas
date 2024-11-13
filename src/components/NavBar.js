import React from 'react';
import styles from './NavBar.module.css';

function NavBar({ setSection }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src="/logo.png" alt="Sportify Logo" className={styles.logo} />
                <h2 className={styles.logoText}>Sportify</h2>
            </div>
            <ul className={styles.navLinks}>
                <li onClick={() => setSection("cadastro")}>Cadastro</li>
                <li onClick={() => setSection("login")}>Login</li>
                <li onClick={() => setSection("perfil")}>Perfil</li>
                <li onClick={() => setSection("consulta")}>Consulta</li>
            </ul>
        </nav>
    );
}

export default NavBar;
