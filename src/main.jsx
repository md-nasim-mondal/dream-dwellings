import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProviders from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProviders>
            <HelmetProvider>
                <RouterProvider router={router}></RouterProvider>
                <ToastContainer></ToastContainer>
            </HelmetProvider>
        </AuthProviders>
    </React.StrictMode>
);
