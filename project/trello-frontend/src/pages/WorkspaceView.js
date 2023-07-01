import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import "../style/WorkspaceList.css"

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

    return (
        <div>
            <Navigation/>
            <h1>Workspace List</h1>
            {workspaces.map((workspace, index) => (
                <Card
                    key={workspace.id}
                    variant="outlined"
                    className="workspace-card"
                >
                    <CardContent className="workspace-card-content">
                        <Typography variant="h5" component="div">
                            {workspace.workspaceName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {workspace.description}
                        </Typography>
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
                            onClick={() => navigate(`/WorkspaceEdit/${workspace.id}`)}
                        >
                            Edit Workspace Details
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default WorkspaceList;
