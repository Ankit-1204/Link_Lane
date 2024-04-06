import "./index.css";
import Login from './pages/login/Login';
import bgImage from './assets/bg.jpg';
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import {Route,Routes} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
function App(){
    return (
    <div
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'aqua',
      minHeight: '100vh', // Set a minimum height to cover the entire viewport
    }}>
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    <Toaster/>
     </div>
    </div>

);
}

export default App;
