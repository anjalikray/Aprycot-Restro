import {Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
