import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import axios from 'axios'; // Importa axios para realizar requisições HTTP
import styles from './ConsultaAtleta.module.css'; // Importa o arquivo de estilos para o componente

/**
 * Componente ConsultaAtleta
 * 
 * Este componente permite consultar atletas cadastrados por esporte.
 * O usuário pode inserir o nome de um esporte e, ao clicar em "Consultar",
 * o sistema exibe uma lista de atletas que praticam o esporte pesquisado.
 * 
 * Exibe mensagens de erro caso a consulta falhe.
 * 
 * @component
 * 
 * @returns {JSX.Element} - Componente de consulta de atletas por esporte.
 */
function ConsultaAtleta() {
    /**
     * Estados locais para armazenar dados do componente.
     */
    const [esporte, setEsporte] = useState('');           // Armazena o esporte a ser consultado
    const [atletas, setAtletas] = useState([]);           // Armazena a lista de atletas retornada pela consulta
    const [errorMessage, setErrorMessage] = useState(''); // Armazena mensagens de erro para exibição ao usuário

    /**
     * Função handleConsulta
     * 
     * Responsável por realizar a consulta de atletas pelo esporte.
     * Faz uma requisição GET para a API com o nome do esporte informado.
     * Em caso de sucesso, a lista de atletas é atualizada.
     * Em caso de erro, exibe uma mensagem informativa sobre o erro ocorrido.
     */
    const handleConsulta = async () => {
        // Limpa a mensagem de erro antes de realizar a consulta
        setErrorMessage('');

        try {
            // Faz uma requisição GET para buscar atletas com base no esporte
            const response = await axios.get(`http://localhost:8080/api/atletas/esporte/${esporte}`);
            setAtletas(response.data); // Atualiza o estado com a lista de atletas retornada
        } catch (error) {
            // Trata diferentes tipos de erros para fornecer feedback ao usuário
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

            {/* Exibe a mensagem de erro, se houver */}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            
            {/* Campo de entrada para o nome do esporte */}
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Esporte" 
                value={esporte} 
                onChange={(e) => setEsporte(e.target.value)} 
            />

            {/* Botão para realizar a consulta */}
            <button className={styles.button} onClick={handleConsulta}>Consultar</button>

            {/* Lista de resultados da consulta */}
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
