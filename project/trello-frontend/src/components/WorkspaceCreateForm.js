import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function WorkspaceCreateForm({ onWorkspaceCreated }) {
    const [workspaceName, setWorkspaceName] = useState('');
    const [description, setDescription] = useState('');
    const [workspaceType, setWorkspaceType] = useState('');

    const handleCreateWorkspace = () => {
        if (!description || !workspaceName || !workspaceType) {
            alert('Please enter workspace name, description, and type.');
            return;
        }
        const newWorkspace = {
            description: description,
            workspaceName: workspaceName,
            workspaceType: workspaceType,
        };

        fetch('http://localhost:8080/workspace/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWorkspace),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWorkspaceName('');
                setDescription('');
                setWorkspaceType('');
                // Pass the created workspace back to the parent component
                onWorkspaceCreated(data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <div>
                <h3>Workspace Name:</h3>
            </div>
            <div>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={workspaceName}
                    onChange={e => setWorkspaceName(e.target.value)}
                />
            </div>
            <div>
                <h3>Description of Workspace:</h3>
            </div>
            <div>
                <TextField
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div>
                <h3>Workspace Type:</h3>
            </div>
            <div>
                <FormControl variant="outlined" style={{ width: '100%' }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={workspaceType}
                        onChange={e => setWorkspaceType(e.target.value)}
                        label="Type"
                    >
                        <MenuItem value="education">education</MenuItem>
                        <MenuItem value="work">work</MenuItem>
                        <MenuItem value="project">project</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <br />
            <div>
                <Button variant="contained" color="primary" onClick={handleCreateWorkspace}>
                    Create Workspace
                </Button>
            </div>
        </div>
    );
}

