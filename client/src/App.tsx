import {Routes , Route} from 'react-router-dom'
import Dashboard from './Pages/dashboard/Dashboard'
import Signin from './Pages/auth/Signin'
import Signup from './Pages/auth/Signup'
import Header from './Pages/Header'
import ForgotPassword from './Pages/auth/ForgotPassword'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;
