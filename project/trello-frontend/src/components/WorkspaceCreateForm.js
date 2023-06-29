import {Button, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import navigation from "./Navigation";

export default function WorkspaceCreateForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        description: ""
    };

    const handleSubmit = (values) => {
        //dispatch(createWorkspace(values));
        navigate('/workspaces');
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <h3>Workspace Name:</h3>
                </div>
                <div>
                    <Field
                        as={TextField}
                        name="name"
                        label="Name"
                        variant="outlined"

                    />
                </div>
                <div>
                    <h3>
                        Description of Workspace:
                    </h3>
                </div>
                <div>
                    <Field
                        as={TextField}
                        name="description"
                        label="Description"
                        variant="outlined"

                    />
                </div>
                <br/>
                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Create Workspace
                    </Button>
                </div>
            </Form>
        </Formik>
    )
}