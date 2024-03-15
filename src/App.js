import './App.css';
import React from 'react';
import SignIn from './Component/SignIn';
import { BrowserRouter, Routes,Route , Link, Router} from 'react-router-dom';
import SignUp from './Component/SignUp';
import Navbar from './Component/Navbar';
import About from './Component/About';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
          </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
