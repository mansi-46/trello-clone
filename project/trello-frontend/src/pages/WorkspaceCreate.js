import React from "react";
import WorkspaceCreateForm from "../components/WorkspaceCreateForm";
import Navigation from "../components/Navigation";

export default function WorkspaceCreate(){
    return(
        <>
            <div>
                <Navigation/>
                <div style={containerStyle}>
                    <h1>Create a Workspace</h1>
                    <WorkspaceCreateForm/>
                </div>
            </div>
        </>
    )
}
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};