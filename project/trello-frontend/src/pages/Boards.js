import React, {useEffect, useState} from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
function Board() {
    const [boardName, setBoardName] = useState('');
    const [workspaceName, setWorkspaceName] = useState('');
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/boards/getAllBoards')
            .then(response => response.json())
            .then(data => setBoards(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleCreateBoard = () => {
        if (!boardName || !workspaceName) {
            alert('Please enter both board name and workspace name.');
            return;
        }
        const newBoard = {
            boardName: boardName,
            workspaceName: workspaceName,
            picture: 'https://w7.pngwing.com/pngs/429/972/png-transparent-green-chalk-board-cartoon-blackboard-cartoon-green-chalkboard-miscellaneous-cartoon-character-english.png',
        };

        fetch('http://localhost:8080/boards/createBoard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBoard),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBoards([...boards, data]);
                setBoardName('');
                setWorkspaceName('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div style={{ padding: 16 }}>
            <Typography variant="h4" gutterBottom>
                Create a Board
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                    <TextField
                        label="Board Name"
                        variant="outlined"
                        fullWidth
                        value={boardName}
                        onChange={(e) => setBoardName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Workspace Name"
                        variant="outlined"
                        fullWidth
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleCreateBoard}>
                        Create
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Board;