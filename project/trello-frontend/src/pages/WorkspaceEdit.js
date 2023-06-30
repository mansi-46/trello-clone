import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';



const WorkspaceEdit = () => {
    const { id } = useParams();//useParams(); // Assuming you're using React Router to pass the workspace ID as a parameter



    const [workspace, setWorkspace] = useState({
        workspaceName: '',
        workspaceType: '',
        description: ''
    });



    useEffect(() => {
        // Fetch workspace data from the backend and update the state
        // You can use the fetch API or axios to make the API call
        // Replace <backend-api-url> with your actual backend API endpoint
        fetch(`http://localhost:8080/getWorkspaceById/${id}`)
            .then(response => response.json())
            .then(data => setWorkspace(data.data));
    }, [id]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkspace(prevState => ({ ...prevState, [name]: value }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        // Update workspace data in the backend
        // You can use the fetch API or axios to make the API call
        // Replace <backend-api-url> with your actual backend API endpoint
        fetch(`http://localhost:8080/editWorkspaceById/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workspace)
        })
            .then(response => response.json())
            .then(data => {
                // Handle success or error response
                console.log(data);
            });
    };



    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="workspaceName"
                label="Workspace Name"
                value={workspace.workspaceName}
                onChange={handleInputChange}
            />
            <TextField
                name="workspaceType"
                label="Workspace Type"
                value={workspace.workspaceType}
                onChange={handleInputChange}
            />
            <TextField
                name="description"
                label="Description"
                value={workspace.description}
                onChange={handleInputChange}
            />
            <Button type="submit" variant="contained">Save</Button>
        </form>
    );
};



export default WorkspaceEdit;