import {Routes , Route} from 'react-router-dom'
import Dashboard from './Pages/dashboard/Dashboard'
import Signin from './Pages/auth/Signin'
import Signup from './Pages/auth/Signup'
import ForgotPassword from './Pages/auth/ForgotPassword'

function App() {
    return (
        <>
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
