import React, { useState } from 'react';
import axios from 'axios';
import styles from './ConsultaAtleta.module.css';

function ConsultaAtleta() {
    const [esporte, setEsporte] = useState('');
    const [atletas, setAtletas] = useState([]);
    const [errorMessage, setErrorMessage] = useState(''); // Mensagem de erro

    const handleConsulta = async () => {
        setErrorMessage('');

        try {
            const response = await axios.get(`http://localhost:8080/api/atletas/esporte/${esporte}`);
            setAtletas(response.data);
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(`Erro ao buscar atletas: ${error.response.data.message}`);
            } else if (error.request) {
                setErrorMessage('Erro de conexão: Não foi possível comunicar-se com o servidor.');
            } else {
                setErrorMessage(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <div className={styles.consultaContainer}>
            <h3>Consulta de Atletas por Esporte</h3>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input className={styles.input} type="text" placeholder="Esporte" value={esporte} onChange={(e) => setEsporte(e.target.value)} />
            <button className={styles.button} onClick={handleConsulta}>Consultar</button>
            <ul className={styles.resultList}>
                {atletas.map((atleta) => (
                    <li key={atleta.nomeUsuario} className={styles.resultItem}>
                        <p><strong>Nome:</strong> {atleta.nome}</p>
                        <p><strong>Nome de Usuário:</strong> {atleta.nomeUsuario}</p>
                        <p><strong>Agência:</strong> {atleta.agencia || 'N/A'}</p>
                        <p><strong>Equipe:</strong> {atleta.equipe || 'N/A'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ConsultaAtleta;
