import React, { useState } from 'react';
import axios from 'axios';
import styles from './CadastroAtleta.module.css';

function CadastroAtleta() {
    const [username, setUsername] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [esporte, setEsporte] = useState('');
    const [genero, setGenero] = useState('');
    const [password, setPassword] = useState('');
    const [agencia, setAgencia] = useState('');  // Campo opcional para agência
    const [equipe, setEquipe] = useState('');    // Campo opcional para equipe
    const [message, setMessage] = useState('');

    const handleCadastro = async () => {
        try {
            await axios.post('http://localhost:8080/api/atletas', {
                nomeUsuario: username,
                nome,
                dataNascimento,
                esporte,
                genero,
                password,
                agencia: agencia || null, // Envia null se o campo estiver vazio
                equipe: equipe || null    // Envia null se o campo estiver vazio
            });
            setMessage('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar atleta:', error);
            setMessage('Erro ao cadastrar atleta.');
        }
    };

    return (
        <div className={styles.cadastroContainer}>
            <h3>Cadastro de Atleta</h3>
            {message && <p>{message}</p>}
            <input className={styles.input} type="text" placeholder="Nome de Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input className={styles.input} type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Esporte" value={esporte} onChange={(e) => setEsporte(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
            <input className={styles.input} type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Agência (opcional)" value={agencia} onChange={(e) => setAgencia(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Equipe (opcional)" value={equipe} onChange={(e) => setEquipe(e.target.value)} />
            <button className={styles.button} onClick={handleCadastro}>Cadastrar</button>
        </div>
    );
}

export default CadastroAtleta;
