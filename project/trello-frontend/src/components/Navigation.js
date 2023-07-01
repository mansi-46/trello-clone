import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button} from '@mui/material';

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>

                <Button component={Link} to="/WorkspaceView" color="inherit">
                    Workspaces
                </Button>

                <Button component={Link} to="/WorkspaceCreate" color="inherit">
                    Create
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;