import { Navigate, useRoutes } from "react-router-dom";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from './pages/ForgotPassword';


// Custom function to check if the user is authenticated
function isAuthenticated() {
  // Add your authentication logic here
  // For example, you can check if the user is logged in or has a valid authentication token
  // Return true if authenticated, false otherwise
  return /* Your authentication logic */;
}

export default function Router() {
  // Function to render the home page if the user is authenticated
  const renderHome = () => {
    if (isAuthenticated()) {
      return <Home />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return useRoutes([
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/login" />,
        },
        {
          path: "login",
          element: <Login />,
        },
        { path: "register", element: <Register /> },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
      ],
    },
    { path: "home", element: renderHome() },
  ]);
}