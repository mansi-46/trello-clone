import {useRoutes} from "react-router-dom";
import WorkspaceCreateLayout from "./layout/WorkspaceCreateLayout";
import WorkspaceCreate from "./pages/WorkspaceCreate";
import WorkspaceMainPage from "./pages/WorkspaceMainPage";

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
                    element: <WorkspaceMainPage/>
                }
            ]
        }
    ])
}