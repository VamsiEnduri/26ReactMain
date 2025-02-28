import React from 'react'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import DashBoard from './Components/DashBoard/DashBoard'
import PrRoutes from './Components/PrRoutes/PrRoutes'
const App = () => {
  return (
    <div>
      <Navbar />
        <Routes >
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/dashboard" element={<DashBoard />}/> */}
        <Route path="/dashboard" element={<PrRoutes element={<DashBoard />}/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App