import React from 'react'
import ProtectedRoutes from './ProtectedRoutes';
import {Routes, Route} from "react-router-dom";
import Administration from '../pages/Administrator/Administration';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Administration"
          element={
            <ProtectedRoutes>
              <Administration />
            </ProtectedRoutes>
          }
        />
        </Routes>
      </>
     
  )
}

export default Rutas