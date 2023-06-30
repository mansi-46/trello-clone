import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';



function Boards() {
    const { workspaceId } = useParams();
    const [boardName, setBoardName] = useState('');
    const [boards, setBoards] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:8080/boards/getBoardsByWorkspace?workspaceId=${workspaceId}`)
            .then(response => response.json())
            .then(data => setBoards(data))
            .catch(error => console.error('Error:', error));
    }, [workspaceId]);



    const handleCreateBoard = () => {
        if (!boardName || !workspaceId) {
            alert('Please enter both board name and workspace ID.');
            return;
        }
        const newBoard = {
            boardName: boardName,
            workspaceId: workspaceId,
            picture: 'https://w7.pngwing.com/pngs/429/972/png-transparent-green-chalk-board-cartoon-blackboard-cartoon-green-chalkboard-miscellaneous-cartoon-character-english.png',
        };



        fetch(`http://localhost:8080/boards/createBoard/${workspaceId}`, {
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
                        onChange={e => setBoardName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Workspace ID"
                        variant="outlined"
                        fullWidth
                        value={workspaceId}
                        disabled
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



export default Boards;