import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function WorkspaceList() {
    const [workspaces, setWorkspaces] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        fetchWorkspaces();
    }, []);



    const fetchWorkspaces = async () => {
        try {
            const response = await fetch('http://localhost:8080/getAllWorkspaces');
            const data = await response.json();
            setWorkspaces(data.data);
        } catch (error) {
            console.log('Error fetching workspaces:', error);
        }
    };



    const handleViewBoards = async (workspaceId) => {
        navigate(`/ViewBoards/${workspaceId}`);
    };

    const handleEditWorkspace = async (workspaceID) => {
        navigate(`/workspaceEdit/${workspaceID}`)
    }




    return (
        <div>
            <h1>Workspace List</h1>
            {workspaces.map(workspace => (
                <Card key={workspace.id} variant="outlined" style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {workspace.workspaceName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {workspace.description}
                        </Typography>
                        <Button onClick={() => handleViewBoards(workspace.id)} variant="outlined">
                            View Boards
                        </Button>
                        {workspace.boards && workspace.boards.length > 0 && (
                            <div>
                                <h3>Boards:</h3>
                                <ul>
                                    {workspace.boards.map(board => (
                                        <li key={board.id}>{board.boardName}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate(`/boards/create/${workspace.id}`)}
                        >
                            Create Board
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate(`/boards/ViewBoards/${workspace.id}`)}
                        >
                            View Boards
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleEditWorkspace(workspace.id)}
                        >
                            Edit Description
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}



export default WorkspaceList;