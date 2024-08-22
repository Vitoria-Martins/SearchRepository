import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';


const RepositoryList = ({ repos = [] }) => {



    return (
        <div className='styleList'>
            <List>
                {repos.map((repo) => ( // cria um componente para cada repositorio da lista

                    <ListItem key={repo.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <a href={`https://github.com/facebook/${repo.name}`}
                                    target="_blank"
                                    style={{ color: 'white', fontWeight: 'bold' }}>
                                    {repo.name}
                                </a>

                            }
                            secondary={

                                <>
                                    <Typography style={{ color: 'gray' }}>{repo.description || 'No description'}</Typography>
                                    <Typography style={{ color: 'white' }}>
                                        <StarIcon style={{
                                            verticalAlign: 'middle', marginRight: '4px', fontSize: 'small', color: 'rgb(255, 255, 114)'
                                        }} />
                                        {repo.stargazers_count}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))
                }
            </List >
        </div>
    );
};

export default RepositoryList;