import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';

const Navigation = () => {
    const [boardMenuAnchor, setBoardMenuAnchor] = React.useState(null);
    const [workspaceMenuAnchor, setWorkspaceMenuAnchor] = React.useState(null);
    const [createMenuAnchor, setCreateMenuAnchor] = React.useState(null);

    const handleBoardMenuOpen = (event) => {
        setBoardMenuAnchor(event.currentTarget);
    };

    const handleBoardMenuClose = () => {
        setBoardMenuAnchor(null);
    };

    const handleWorkspaceMenuOpen = (event) => {
        setWorkspaceMenuAnchor(event.currentTarget);
    };

    const handleWorkspaceMenuClose = () => {
        setWorkspaceMenuAnchor(null);
    };

    const handleSignOut = () => {
        // Handle sign-out logic here
    };

    const handleCreateMenuOpen = (event) =>{
        setCreateMenuAnchor(event.currentTarget)
    }

    const handleCreateMenuClose = () =>{
        setCreateMenuAnchor(null);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button onClick={handleBoardMenuOpen} color="inherit">
                    Boards
                </Button>
                <Menu
                    anchorEl={boardMenuAnchor}
                    open={Boolean(boardMenuAnchor)}
                    onClose={handleBoardMenuClose}
                >
                    {/* Add dropdown menu items for boards */}
                    <MenuItem onClick={handleBoardMenuClose}>Board 1</MenuItem>
                    <MenuItem onClick={handleBoardMenuClose}>Board 2</MenuItem>
                </Menu>

                <Button onClick={handleWorkspaceMenuOpen} color="inherit">
                    Workspaces
                </Button>
                <Menu
                    anchorEl={workspaceMenuAnchor}
                    open={Boolean(workspaceMenuAnchor)}
                    onClose={handleWorkspaceMenuClose}
                >
                    {/* Add dropdown menu items for workspaces */}
                    <MenuItem onClick={handleWorkspaceMenuClose}>Workspace 1</MenuItem>
                    <MenuItem onClick={handleWorkspaceMenuClose}>Workspace 2</MenuItem>
                </Menu>

                <Button onClick={handleCreateMenuOpen} color="inherit">
                    Create
                </Button>
                <Menu
                    anchorEl={createMenuAnchor}
                    open={Boolean(createMenuAnchor)}
                    onClose={handleCreateMenuClose}
                >
                    {/* Add dropdown menu items for workspaces */}
                    <MenuItem onClick={handleCreateMenuClose}>Workspace</MenuItem>
                    <MenuItem onClick={handleCreateMenuClose}>Board</MenuItem>
                </Menu>

                <Button onClick={handleSignOut} color="inherit">
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
