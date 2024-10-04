import {Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Signin from './components/Signin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
