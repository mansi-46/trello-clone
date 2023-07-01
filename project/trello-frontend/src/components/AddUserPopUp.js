import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

function AddUserPopUp({ workspaceId, onClose, onAddUser }) {
    const [userName, setUserName] = useState('');

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleAddUser = () => {
        fetch(`http://localhost:8080/addUserToWorkspace/${workspaceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: userName }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Call the onAddUser function to update the workspace details in the parent component
                onAddUser(data.data);
                onClose();
            })
            .catch((error) => {
                console.log('Error adding user:', error);
            });
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
                <TextField
                    label="User Name"
                    value={userName}
                    onChange={handleUserNameChange}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={handleAddUser}>
                    Add User
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddUserPopUp;
