
import React from "react"
import LogoOnlyLayout from "./layout/LogoOnlyLayout";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <LogoOnlyLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ],

        },
    ]);
}
