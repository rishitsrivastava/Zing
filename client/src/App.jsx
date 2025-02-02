import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));


function App() {

  return (
    <Router>
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Chat' element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
