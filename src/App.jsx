import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'


function App() {

  return (
    <div className="App">
   <Router>
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </Router>
    </div>
  )
}

export default App
