import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import EstateDetails from "../components/EstateDetails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import CustomerReviews from "../pages/CustomerReviews/CustomerReviews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateProfile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile></UpdateProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/estate/:estateId",
                element: (
                    <PrivateRoute>
                        <EstateDetails></EstateDetails>,
                    </PrivateRoute>
                ),
                loader: () => fetch("/estates.json"),
            },
            {
                path: "/contact",
                element: (
                    <PrivateRoute>
                        <Contact></Contact>
                    </PrivateRoute>
                ),
            },
            {
                path: "/reviews",
                element: (
                    <PrivateRoute>
                        <CustomerReviews></CustomerReviews>,
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
