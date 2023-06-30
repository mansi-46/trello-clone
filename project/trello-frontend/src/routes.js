import React from 'react';
import {useRoutes} from "react-router-dom";
import WorkspaceCreateLayout from "./layout/WorkspaceCreateLayout";
import WorkspaceCreate from "./pages/WorkspaceCreate";
import WorkspaceMainPage from "./pages/WorkspaceMainPage";
import ViewBoards from "./pages/ViewBoards";
import Board from "./pages/Boards";


export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <WorkspaceCreateLayout/>,
            children: [
                {
                    path: "WorkspaceCreate",
                    element: <WorkspaceCreate />
                },
                {
                    path: "WorkspaceMainPage",
                    element: <WorkspaceMainPage />
                },
                {
                    path: "ViewBoards",
                    element: <ViewBoards />
                },
                {
                    path: "Boards",
                    element: <Board />
                }
            ]
        }
    ])
}