import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import {AuthProvider} from "./context/authContext.tsx";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
        </BrowserRouter>
    </AuthProvider>
);
