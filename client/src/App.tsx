import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Signin from "./components/pages/Signin/Signin";
import Header from "./components/pages/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;
