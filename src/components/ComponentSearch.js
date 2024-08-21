import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import RepositoryList from './RepositoryList';
import axios from 'axios';

// Componente Caixa de Texto
function InputText({ setUsername }) {
    return (
        <TextField
            id="filled-basic"
            label="Search GitHub"
            variant="filled"
            onChange={(e) => setUsername(e.target.value)}
            sx={{

                color: 'black',


            }} // Atualiza com o novo valor do input 
        />
    );
}

// Componente do Botão
function BtnSearch({ eventoSearch }) {
    return (
        <Button
            variant="contained"
            sx={{
                fontSize: '8px',
                width: '60px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                margin: 'auto',
                marginTop: '10px',
                backgroundColor: '#380b5b',
                color: 'white',
                borderRadius: '100px',
                '&:hover': {
                    backgroundColor: '#380b5b',
                }
            }}
            onClick={eventoSearch}
        >
            Search
        </Button>
    );
}

// Componente principal que junta tudo
function ComponentSearch() {
    const [username, setUsername] = useState(''); // Armazena nome do usuário
    const [repos, setRepos] = useState([]); // Armazena os repositórios
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro
    const [userNotFound, setUserNotFound] = useState(false); // Estado para "usuário não encontrado"

    // Função para busca 
    const eventoSearch = async () => {
        // Nome de usuário válido para a API
        const validUsernames = ['dan', 'dan abramov', 'gaearon'];

        // Remove espaços e converte para minúsculas para comparação
        const trimmedUsername = username.trim().toLowerCase();

        // verifica se trimmed esta em valid e inverte a resposta booleana
        if (!validUsernames.includes(trimmedUsername)) {
            setUserNotFound(true); // Define que o usuário não foi encontrado
            setRepos([]); // Limpa os repositórios
            setLoading(false);
            return;
        }



        setLoading(true); // Define como carregando quando a busca começa
        setUserNotFound(false); // Limpa o estado de usuário não encontrado

        try {
            // Corrigido: URL deve ser uma string entre aspas
            const response = await axios.get('https://api.github.com/users/gaearon/repos');
            setRepos(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false); // Garante que pare de carregar no final, independente do resultado
        }
    };

    // Container para agrupar todos os componentes 
    return (
        <div>
            <div id="containerSearch" ><InputText setUsername={setUsername} />
                <BtnSearch eventoSearch={eventoSearch} /></div>
            {loading && <div
                style={{ padding: '10px' }}
            >Loading...</div>} {/* Exibe a mensagem de carregamento */}
            {userNotFound && <div
                style={{ color: 'red', padding: '10px' }}>User not found</div>}
            {error && <div style={{ color: 'red' }}>Error occurred: {error.message}</div>}
            <RepositoryList repos={repos} loading={loading} error={error} />
        </div >
    );
}

export default ComponentSearch;