import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/shop";
import About from "../components/About";
import Dashboard from "../dashboard/Dashboard";
import Uploadbook from "../dashboard/Uploadbook";
import Managebook from "../dashboard/Managebook";
import Editbook from "../dashboard/Editbook";
import Maindash from "../components/Maindash";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Privateroute from "../Privateroute/Privateroute";

// Create a browser router using createBrowserRouter
const router = createBrowserRouter([
  {
    // Define the root route
    path: "/",
    element: <App />,
    children: [
      {
        // Home route
        path: "/",
        element: <Home />,
      },
      {
        // Shop route
        path: "/shop",
        element: <Shop />,
      },
      {
        // About route
        path: "/about",
        element: <About />,
      }
    ],
  },
  {
    // Admin dashboard route
    path: "/admin/dashboard",
    element: <Dashboard/>,
    children: [
      {
        // Main dashboard route with private route handling
        path: "/admin/dashboard",
        element: <Privateroute><Maindash/></Privateroute>
      },
      {
        // Upload book route
        path: "/admin/dashboard/upload",
        element: <Uploadbook />,
      },
      {
        // Manage book route
        path: "/admin/dashboard/manage",
        element: <Managebook />,
      },
      {
        // Edit book route with dynamic loader for fetching single book data
        path: "/admin/dashboard/edit-book/:id",
        element: <Editbook/>,
        loader: ({params}) => fetch(`http://localhost:5000/single-book/${params.id}`)
      },
    ],
  },
  {
    // Signup route
    path: "/signup",
    element: <Signup/>
  },
  {
    // Login route
    path: "/login",
    element: <Login/>
  },
]);

export default router;
