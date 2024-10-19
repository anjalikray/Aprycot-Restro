import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthProvider>
            <StrictMode>
                <Toaster position="top-right" />
                <App />
            </StrictMode>
        </AuthProvider>
    </BrowserRouter>
);
