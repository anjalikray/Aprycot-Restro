import {Routes , Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Header from './components/pages/Header'
import ForgotPassword from './components/auth/ForgotPassword'

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
