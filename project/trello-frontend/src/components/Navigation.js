import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';

const Navigation = () => {
    const [workspaceMenuAnchor, setWorkspaceMenuAnchor] = useState(null);
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        fetchWorkspaces();
    }, []);

    const fetchWorkspaces = async () => {
        try {
            const response = await fetch('/getAllWorkspaces');
            const data = await response.json();
            setWorkspaces(data);
        } catch (error) {
            console.error('Error fetching workspaces:', error);
        }
    };

    const handleWorkspaceMenuOpen = (event) => {
        setWorkspaceMenuAnchor(event.currentTarget);
    };

    const handleWorkspaceMenuClose = () => {
        setWorkspaceMenuAnchor(null);
    };

    const handleWorkspaceMenuClick = (workspaceId) => {
        handleWorkspaceMenuClose();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>

                <Button onClick={handleWorkspaceMenuOpen} color="inherit">
                    Workspaces
                </Button>
                <Menu
                    anchorEl={workspaceMenuAnchor}
                    open={Boolean(workspaceMenuAnchor)}
                    onClose={handleWorkspaceMenuClose}
                >
                    {workspaces.map((workspace) => (
                        <MenuItem
                            key={workspace.id}
                            onClick={() => handleWorkspaceMenuClick(workspace.id)}
                        >
                            {workspace.name}
                        </MenuItem>
                    ))}
                </Menu>
                <Button component={Link} to="/WorkspaceCreate" color="inherit">
                    Create
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;