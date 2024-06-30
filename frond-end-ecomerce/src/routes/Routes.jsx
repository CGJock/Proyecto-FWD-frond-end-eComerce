
import ProtectedRoutes from './ProtectedRoutes';
import {Routes, Route} from "react-router-dom";
import Administration from '../pages/Administrator/Administration';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import About from '../pages/About/About';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
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