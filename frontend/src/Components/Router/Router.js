import React from 'react'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Profile from '../../pages/Profile/Profile'
import SignUpIn from '../../pages/SignUpIn/SignUpIn'
import UserDashboard from '../../pages/UserDashboard/UserDashboard'

function Router() {
    return (
        <div>
           <BrowserRouter>

           <Routes>
              
             <Route exact path='/' element={<Home />} />
             <Route exact path="/SignUpIn" element={<SignUpIn/>} />

             <Route exact path='/profile' element={<Profile />} />

             <Route exact path='/user/dashboard' element={<UserDashboard />} />
  
            </Routes>
              
             
           </BrowserRouter>
        </div>
    )
}

export default Router
