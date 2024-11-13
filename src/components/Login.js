import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Mensagem de erro

    const handleLogin = async () => {
        setMessage('');
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                nomeUsuario: username,
                password,
            });

            if (response.status === 200) {
                setMessage('Login realizado com sucesso!');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(`Erro ao fazer login: ${error.response.data.message || 'Credenciais incorretas'}`);
            } else if (error.request) {
                setErrorMessage('Erro de conexão: Não foi possível comunicar-se com o servidor.');
            } else {
                setErrorMessage(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h3>Login</h3>
            {message && <p className={styles.successMessage}>{message}</p>}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input className={styles.input} type="text" placeholder="Nome de Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className={styles.input} type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className={styles.button} onClick={handleLogin}>Entrar</button>
        </div>
    );
}

export default Login;
