import {Button, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import navigation from "./Navigation";
import {useEffect, useState} from "react";

export default function WorkspaceCreateForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceDescription, setWorkspaceDescription] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/getAllWorkspaces')
            .then(response => response.json())
            .then(data => setWorkspaceName(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleCreateWorkspace = () => {
        if (!workspaceDescription || !workspaceName) {
            alert('Please enter both workspace description and workspace name.');
            return;
        }
        const newWorkspace = {
            workspaceDescription: workspaceDescription,
            workspaceName: workspaceName,
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
                setWorkspaceName([...workspaceName, data]);
                setWorkspaceName('');
                setWorkspaceDescription('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Formik>
            <Form>
                <div>
                    <h3>Workspace Name:</h3>
                </div>
                <div>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}

                    />
                </div>
                <div>
                    <h3>
                        Description of Workspace:
                    </h3>
                </div>
                <div>
                    <TextField
                        label="Description"
                        variant="outlined"
                        value={workspaceDescription}
                        onChange={(e) => setWorkspaceDescription(e.target.value)}

                    />
                </div>
                <br/>
                <div>
                    <Button variant="contained" color="primary" onClick={handleCreateWorkspace}>
                        Create Workspace
                    </Button>
                </div>
            </Form>
        </Formik>
    )
}