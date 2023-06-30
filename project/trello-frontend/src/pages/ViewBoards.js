import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import {useParams} from "react-router-dom";

function ViewBoards() {
    const { workspaceId } = useParams();
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/boards/getBoardsByWorkspace?workspaceId=${workspaceId}`)
            .then(response => response.json())
            .then(data => setBoards(data))
            .catch(error => console.error('Error:', error));
    }, []);
    const handleDeleteBoard = (boardName) => {
        fetch(`http://localhost:8080/boards/deleteBoard?boardName=${boardName}`, {
            method: 'POST',
        })
            .then(response => response.text())
            .then(data => {
                if (data === 'Board Successfully Deleted') {
                    setBoards(prevBoards => prevBoards.filter(board => board.boardName !== boardName));
                } else {
                    console.log('Failed to delete board.');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Grid container spacing={2}>
            {boards.map(board => (
                <Grid item xs={12} sm={6} md={4} key={board.id}>
                    <Card style={{ backgroundColor: '#e0e0e0' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {board.boardName}
                            </Typography>
                            <Typography color="text.secondary">
                                Workspace: {board.workspaceName}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDeleteBoard(board.boardName)}
                                style={{ marginTop: '1rem' }}
                            >
                                Delete
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ViewBoards;

