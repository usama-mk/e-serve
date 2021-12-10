import React from 'react'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import SignUpIn from '../../pages/SignUpIn/SignUpIn'

function Router() {
    return (
        <div>
           <BrowserRouter>

           <Routes>
              
             <Route exact path='/' element={<Home />} />
             <Route exact path="/SignUpIn" element={<SignUpIn/>} />
  
            </Routes>
              
             
           </BrowserRouter>
        </div>
    )
}

export default Router
