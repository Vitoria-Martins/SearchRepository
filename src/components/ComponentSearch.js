import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import RepositoryList from './RepositoryList';
import axios from 'axios';


function ComponentSearch() {
    const [username, setUsername] = useState(''); // estado de username
    const [repos, setRepos] = useState([]); //lista de repositorios
    const [loading, setLoading] = useState(false); // carregamento
    const [error, setError] = useState(null); //erros
    const [userNotFound, setUserNotFound] = useState(false);
    const [page, setPage] = useState(1); //indica em qual pagina esta 
    const [itemsPage] = useState(5); // quantos itens por paginas 

    //funcao para paginacao
    function PageChange(newPage) {
        setPage(newPage);
        console.log(newPage > page ? "Next Page:" : "Previous Page:", newPage); //condicional para voltar ou ir pra proxima pagina
        eventoSearch();
    }
    const eventoSearch = async () => {
        const validUsername = ['facebook'];
        const trimmedUsername = username.trim().toLowerCase();

        if (!validUsername.includes(trimmedUsername)) {
            setUserNotFound(true);
            setRepos([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        setUserNotFound(false);
        try {
            const response = await axios.get(`https://api.github.com/users/facebook/repos?page=${page}&per_page=${itemsPage}`);
            setRepos(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <div className="containerSearch">
                <TextField
                    id="standard-basic"
                    label="Search GitHub"
                    variant="standard"
                    value={username} //vincula o input ao estado
                    onChange={(e) => setUsername(e.target.value)} //atualiza o estado com o valor diitado
                    sx={{
                        color: 'black',
                        backgroundColor: 'transparent',
                        '& .MuiInput-underline:after': {
                            borderBottom: '2px solid #08284D'

                        },
                        '& .MuiInputLabel-root': {
                            color: '#08284D'
                        }
                    }
                    }
                />
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
                        backgroundColor: '#282c34',
                        color: 'white',
                        borderRadius: '100px',
                        '&:hover': {
                            backgroundColor: '#282c34',
                        }
                    }}
                    onClick={eventoSearch}
                > Search</Button>
            </div>
            {/* exibe as mensagens de carregamento e erro */}
            {loading && <div>Loading...</div>}
            {userNotFound && <div style={{ color: 'red' }}>User not found</div>}
            {error && <div style={{ color: 'red' }}>Error occurred: {error.message}</div>}

            {/* exibe a lista  */}
            <RepositoryList repos={repos} />
            {/* garante que a lista so seja mostrado se tiver pelo menos 1 item */}
            {repos.length > 0 && (
                <div>
                    <Button
                        onClick={() => PageChange(page - 1)}
                        disabled={page === 1}
                    > &lt;</Button>
                    <Button
                        onClick={() => PageChange(page + 1)}
                    >&gt;</Button>
                </div>
            )}
        </div>
    );
}
export default ComponentSearch;
