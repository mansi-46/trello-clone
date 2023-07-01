import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const WorkspaceEdit = () => {
    const { id } = useParams();
    const [workspace, setWorkspace] = useState({
        workspaceName: '',
        workspaceType: '',
        description: ''
    });

    useEffect(() => {
        // Simulate fetching workspace data from an API
        fetch(`http://localhost:8080/workspaces/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setWorkspace(data.data);
                } else {
                    console.error('Failed to fetch workspace:', data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setWorkspace(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        // Simulate updating the workspace by sending the updated data to the server
        fetch(`http://localhost:8080/updateWorkspace/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workspace)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log('Workspace updated successfully:', data.data);
                } else {
                    console.error('Failed to update workspace:', data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" align="center">
                Edit Workspace
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    name="workspaceName"
                    label="Workspace Name"
                    value={workspace.workspaceName}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
                <TextField
                    name="workspaceType"
                    label="Workspace Type"
                    value={workspace.workspaceType}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    name="description"
                    label="Description"
                    value={workspace.description}
                    onChange={handleInputChange}
                    multiline
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default WorkspaceEdit;