import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import axios from 'axios'; // Importa axios para realizar requisições HTTP
import styles from './Login.module.css'; // Importa o arquivo de estilos para o componente

/**
 * Componente Login
 * 
 * Este componente fornece um formulário de login básico, onde os usuários podem inserir seu nome de usuário e senha
 * para autenticar. Ao enviar os dados, o componente envia uma requisição para a API de login e exibe mensagens de
 * sucesso ou erro, conforme o resultado.
 * 
 * @component
 * 
 * @returns {JSX.Element} - Componente de login com formulário e feedback de autenticação.
 */
function Login() {
    /**
     * Estados locais para armazenar os dados do formulário de login.
     */
    const [username, setUsername] = useState('');       // Armazena o nome de usuário
    const [password, setPassword] = useState('');       // Armazena a senha
    const [message, setMessage] = useState('');         // Armazena mensagens de sucesso
    const [errorMessage, setErrorMessage] = useState(''); // Armazena mensagens de erro

    /**
     * Função handleLogin
     * 
     * Responsável por realizar o processo de login. Envia uma requisição POST para a API de login com o nome de usuário e senha.
     * Caso o login seja bem-sucedido, exibe uma mensagem de sucesso.
     * Em caso de erro, exibe uma mensagem apropriada para o usuário, detalhando o problema.
     */
    const handleLogin = async () => {
        // Limpa as mensagens de sucesso e erro antes de cada tentativa de login
        setMessage('');
        setErrorMessage('');

        try {
            // Envia a requisição POST para a API com os dados de login
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                nomeUsuario: username, // Envia o nome de usuário
                password,              // Envia a senha
            });

            // Verifica o status da resposta. Se for 200, login bem-sucedido
            if (response.status === 200) {
                setMessage('Login realizado com sucesso!'); // Atualiza o estado com a mensagem de sucesso
            }
        } catch (error) {
            // Trata diferentes tipos de erros e fornece feedback detalhado para o usuário
            if (error.response && error.response.data) {
                // Se a resposta de erro da API contiver detalhes, exibe a mensagem específica
                setErrorMessage(`Erro ao fazer login: ${error.response.data.message || 'Credenciais incorretas'}`);
            } else if (error.request) {
                // Se o erro estiver relacionado à falta de resposta do servidor
                setErrorMessage('Erro de conexão: Não foi possível comunicar-se com o servidor.');
            } else {
                // Exibe uma mensagem de erro genérica para outros tipos de falhas
                setErrorMessage(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h3>Login</h3>

            {/* Exibe a mensagem de sucesso, se houver */}
            {message && <p className={styles.successMessage}>{message}</p>}
            
            {/* Exibe a mensagem de erro, se houver */}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            
            {/* Campo de entrada para o nome de usuário */}
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Nome de Usuário" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            
            {/* Campo de entrada para a senha */}
            <input 
                className={styles.input} 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            
            {/* Botão de login para acionar o processo de autenticação */}
            <button className={styles.button} onClick={handleLogin}>Entrar</button>
        </div>
    );
}

export default Login;
