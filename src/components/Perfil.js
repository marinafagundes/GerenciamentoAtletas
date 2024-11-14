import React, { useState, useEffect } from 'react'; // Importa os hooks do React para gerenciar o estado e os efeitos
import axios from 'axios'; // Importa o axios para fazer requisições HTTP
import styles from './Perfil.module.css'; // Importa o arquivo de estilos para o componente

/**
 * Componente Perfil
 * 
 * Este componente renderiza o perfil de um atleta e permite a edição e atualização de suas informações.
 * Ele também oferece a possibilidade de o usuário se desconectar da conta.
 * 
 * @param {Object} props - Propriedades recebidas pelo componente.
 * @param {string} props.username - Nome de usuário do atleta logado, utilizado para buscar e atualizar o perfil.
 * @param {Function} props.onLogout - Função de callback executada quando o usuário clica no botão "Logout".
 * 
 * Funcionalidade:
 * - Exibe as informações do atleta (nome, data de nascimento, esporte, gênero, agência e equipe).
 * - Permite editar essas informações e salvar as mudanças no servidor.
 * - Exibe mensagens de sucesso ou erro após a atualização do perfil.
 */
function Perfil({ username, onLogout }) {
    /**
     * Estado local para armazenar os dados do perfil do atleta.
     */
    const [nome, setNome] = useState('');                  // Nome do atleta
    const [dataNascimento, setDataNascimento] = useState(''); // Data de nascimento do atleta
    const [esporte, setEsporte] = useState('');            // Esporte do atleta
    const [genero, setGenero] = useState('');              // Gênero do atleta
    const [agencia, setAgencia] = useState('');            // Agência do atleta (opcional)
    const [equipe, setEquipe] = useState('');              // Equipe do atleta (opcional)
    const [message, setMessage] = useState('');            // Mensagem de sucesso após a atualização
    const [errorMessage, setErrorMessage] = useState('');  // Mensagem de erro caso algo dê errado

    /**
     * Efeito que carrega o perfil do atleta quando o componente é montado ou o nome do usuário muda.
     * Faz uma requisição GET ao servidor para buscar os dados do atleta logado.
     */
    useEffect(() => {
        if (username) { // Verifica se o username foi passado e não está vazio
            const fetchPerfil = async () => {
                setErrorMessage(''); // Limpa mensagens de erro anteriores
                setMessage(''); // Limpa mensagens de sucesso anteriores
                try {
                    // Faz uma requisição GET para buscar os dados do atleta
                    const response = await axios.get(`http://localhost:8080/api/atletas/${username}`);
                    const atleta = response.data;
                    // Preenche os estados com os dados do servidor
                    setNome(atleta.nome);
                    setDataNascimento(atleta.dataNascimento);
                    setEsporte(atleta.esporte);
                    setGenero(atleta.genero);
                    setAgencia(atleta.agencia || ''); // Usa '' caso o campo 'agencia' seja nulo
                    setEquipe(atleta.equipe || '');   // Usa '' caso o campo 'equipe' seja nulo
                } catch (error) {
                    // Caso haja erro na requisição, exibe a mensagem de erro
                    setErrorMessage('Erro ao carregar perfil. Tente novamente.');
                    console.error('Erro ao carregar perfil:', error); // Registra o erro no console
                }
            };
            fetchPerfil(); // Chama a função para buscar o perfil
        }
    }, [username]); // O efeito é executado sempre que 'username' muda

    /**
     * Função que atualiza as informações do perfil do atleta no servidor.
     * Envia os dados modificados via requisição PUT.
     */
    const handleAtualizarPerfil = async () => {
        setMessage(''); // Limpa a mensagem de sucesso anterior
        setErrorMessage(''); // Limpa a mensagem de erro anterior

        try {
            // Requisição PUT para atualizar os dados do perfil do atleta
            await axios.put(`http://localhost:8080/api/atletas/${username}`, {
                nome,
                dataNascimento,
                esporte,
                genero,
                agencia: agencia || null, // Se 'agencia' for vazio, envia null
                equipe: equipe || null     // Se 'equipe' for vazio, envia null
            });
            setMessage('Perfil atualizado com sucesso!'); // Mensagem de sucesso
        } catch (error) {
            // Caso haja erro, exibe a mensagem de erro apropriada
            if (error.response && error.response.data) {
                // Erro retornado do servidor (exemplo: validação de campos)
                setErrorMessage(`Erro ao atualizar perfil: ${error.response.data.message}`);
            } else if (error.request) {
                // Erro de conexão com o servidor
                setErrorMessage('Erro de conexão: Não foi possível comunicar-se com o servidor.');
            } else {
                // Outro tipo de erro
                setErrorMessage(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <div className={styles.perfilContainer}>
            <h3>Perfil de {username}</h3>

            {/* Mensagens de sucesso e erro */}
            {message && <p className={styles.successMessage}>{message}</p>}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

            {/* Formulário de edição de perfil */}
            {errorMessage === '' && (
                <>
                    {/* Campo para editar o nome */}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} // Atualiza o estado 'nome' com o valor do campo
                    />
                    {/* Campo para editar a data de nascimento */}
                    <input
                        className={styles.input}
                        type="date"
                        placeholder="Data de Nascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)} // Atualiza o estado 'dataNascimento'
                    />
                    {/* Campo para editar o esporte */}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Esporte"
                        value={esporte}
                        onChange={(e) => setEsporte(e.target.value)} // Atualiza o estado 'esporte'
                    />
                    {/* Campo para editar o gênero */}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Gênero"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)} // Atualiza o estado 'genero'
                    />
                    {/* Campo para editar a agência */}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Agência (opcional)"
                        value={agencia}
                        onChange={(e) => setAgencia(e.target.value)} // Atualiza o estado 'agencia'
                    />
                    {/* Campo para editar a equipe */}
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Equipe (opcional)"
                        value={equipe}
                        onChange={(e) => setEquipe(e.target.value)} // Atualiza o estado 'equipe'
                    />

                    {/* Botão para salvar as atualizações do perfil */}
                    <button className={styles.button} onClick={handleAtualizarPerfil}>
                        Atualizar Perfil
                    </button>

                    {/* Botão de logout */}
                    <button className={styles.logoutButton} onClick={onLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}

export default Perfil;
