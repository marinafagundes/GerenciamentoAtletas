import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Perfil.module.css';

function Perfil({ username }) {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [esporte, setEsporte] = useState('');
    const [genero, setGenero] = useState('');
    const [agencia, setAgencia] = useState('');
    const [equipe, setEquipe] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Busca o perfil ao carregar o componente
    useEffect(() => {
        const fetchPerfil = async () => {
            setErrorMessage('');
            setMessage('');
            try {
                const response = await axios.get(`http://localhost:8080/api/atletas/${username}`);
                const atleta = response.data;

                // Verifica se o perfil foi encontrado
                if (atleta) {
                    setNome(atleta.nome);
                    setDataNascimento(atleta.dataNascimento);
                    setEsporte(atleta.esporte);
                    setGenero(atleta.genero);
                    setAgencia(atleta.agencia || '');
                    setEquipe(atleta.equipe || '');
                } else {
                    setErrorMessage('Perfil não encontrado.');
                }
            } catch (error) {
                setErrorMessage('Erro ao carregar perfil. Tente novamente.');
                console.error('Erro ao carregar perfil:', error);
            }
        };
        fetchPerfil();
    }, [username]);

    const handleAtualizarPerfil = async () => {
        setMessage('');
        setErrorMessage('');

        try {
            await axios.put(`http://localhost:8080/api/atletas/${username}`, {
                nome,
                dataNascimento,
                esporte,
                genero,
                agencia: agencia || null,
                equipe: equipe || null
            });
            setMessage('Perfil atualizado com sucesso!');
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(`Erro ao atualizar perfil: ${error.response.data.message}`);
            } else if (error.request) {
                setErrorMessage('Erro de conexão: Não foi possível comunicar-se com o servidor.');
            } else {
                setErrorMessage(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <div className={styles.perfilContainer}>
            <h3>Perfil de {username}</h3>
            {message && <p className={styles.successMessage}>{message}</p>}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {errorMessage === '' && (
                <>
                    <input className={styles.input} type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input className={styles.input} type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                    <input className={styles.input} type="text" placeholder="Esporte" value={esporte} onChange={(e) => setEsporte(e.target.value)} />
                    <input className={styles.input} type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                    <input className={styles.input} type="text" placeholder="Agência (opcional)" value={agencia} onChange={(e) => setAgencia(e.target.value)} />
                    <input className={styles.input} type="text" placeholder="Equipe (opcional)" value={equipe} onChange={(e) => setEquipe(e.target.value)} />
                    <button className={styles.button} onClick={handleAtualizarPerfil}>Atualizar Perfil</button>
                </>
            )}
        </div>
    );
}

export default Perfil;
