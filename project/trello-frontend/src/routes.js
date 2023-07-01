import React from 'react';
import {useRoutes} from "react-router-dom";
import WorkspaceCreateLayout from "./layout/WorkspaceCreateLayout";
import WorkspaceCreate from "./pages/WorkspaceCreate";
import WorkspaceMainPage from "./pages/WorkspaceMainPage";
import ViewBoards from "./pages/ViewBoards";
import Board from "./pages/Boards";
import WorkspaceView from "./pages/WorkspaceView";
import WorkspaceEdit from "./pages/WorkspaceEdit";

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
                    path: "WorkspaceView",
                    element: <WorkspaceView />
                },
                {
                     path: "ViewBoards",
                    element: <ViewBoards />
                },
                {
                    path: "Boards",
                    element: <Board />
                },
                { path: 'boards/create/:workspaceId',
                    element: <Board /> },
                {
                    path: "WorkspaceEdit",
                    element: <WorkspaceEdit />
                },
                {
                    path: '/WorkspaceEdit/:id',
                    element: <WorkspaceEdit />
                },
                { path: 'boards/ViewBoards/:workspaceId',
                    element: <ViewBoards /> },
            ]
        }
    ])
}