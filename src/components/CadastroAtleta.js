import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import axios from 'axios'; // Importa axios para realizar requisições HTTP
import styles from './CadastroAtleta.module.css'; // Importa o arquivo de estilos para o componente

/**
 * Componente CadastroAtleta
 * 
 * Este componente renderiza um formulário para cadastro de um novo atleta na plataforma Sportify.
 * O usuário pode fornecer informações como nome de usuário, nome completo, data de nascimento, esporte, gênero,
 * senha, agência e equipe. Os campos agência e equipe são opcionais.
 * 
 * @component
 * 
 * @returns {JSX.Element} - Componente de formulário para cadastro de atleta.
 */
function CadastroAtleta() {
    /**
     * Estados locais para armazenar os dados do formulário.
     */
    const [username, setUsername] = useState('');         // Nome de usuário único para o atleta
    const [nome, setNome] = useState('');                 // Nome completo do atleta
    const [dataNascimento, setDataNascimento] = useState(''); // Data de nascimento do atleta
    const [esporte, setEsporte] = useState('');           // Esporte praticado pelo atleta
    const [genero, setGenero] = useState('');             // Gênero do atleta
    const [password, setPassword] = useState('');         // Senha para autenticação
    const [agencia, setAgencia] = useState('');           // Agência (opcional)
    const [equipe, setEquipe] = useState('');             // Equipe (opcional)
    const [message, setMessage] = useState('');           // Mensagem de feedback ao usuário

    /**
     * Função handleCadastro
     * 
     * Responsável por enviar os dados do atleta para o backend via requisição POST.
     * Em caso de sucesso, exibe uma mensagem de confirmação.
     * Em caso de erro, exibe uma mensagem de erro.
     */
    const handleCadastro = async () => {
        try {
            // Requisição para a API usando axios para cadastrar o atleta
            await axios.post('http://localhost:8080/api/atletas', {
                nomeUsuario: username,
                nome,
                dataNascimento,
                esporte,
                genero,
                password,
                agencia: agencia || null, // Se agência estiver vazia, envia null
                equipe: equipe || null    // Se equipe estiver vazia, envia null
            });
            setMessage('Cadastro realizado com sucesso!'); // Define a mensagem de sucesso
        } catch (error) {
            console.error('Erro ao cadastrar atleta:', error); // Log de erro no console para debugging
            setMessage('Erro ao cadastrar atleta.');           // Define a mensagem de erro para o usuário
        }
    };

    return (
        <div className={styles.cadastroContainer}>
            <h3>Cadastro de Atleta</h3>

            {/* Exibe a mensagem de feedback, caso haja */}
            {message && <p>{message}</p>}

            {/* Campos de entrada de dados */}
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Nome de Usuário" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Nome Completo" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="date" 
                placeholder="Data de Nascimento" 
                value={dataNascimento} 
                onChange={(e) => setDataNascimento(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Esporte" 
                value={esporte} 
                onChange={(e) => setEsporte(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Gênero" 
                value={genero} 
                onChange={(e) => setGenero(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Agência (opcional)" 
                value={agencia} 
                onChange={(e) => setAgencia(e.target.value)} 
            />
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Equipe (opcional)" 
                value={equipe} 
                onChange={(e) => setEquipe(e.target.value)} 
            />

            {/* Botão para submeter o cadastro */}
            <button className={styles.button} onClick={handleCadastro}>Cadastrar</button>
        </div>
    );
}

export default CadastroAtleta;
