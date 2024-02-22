//import { useState } from 'react'
import reactLogo from './assets/logo.png'

import './App.css'
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <LoginForm/>
    </div>
  },
  {
    path: '/register',
    element: <div>
    <img src={reactLogo} className="logo react" alt="React logo" />
    <RegistrationForm/>
  </div>
  }
])

function App() {

  return ( 
    <RouterProvider router={router} />
      
  );
}

export default App;

{/* <>
      <div style={{ height: '100%'}}>
        
        <img src={reactLogo} className="logo react" alt="React logo" />
     
    </div> 
    <div> <LoginForm/>

    </div>
    <RegistrationForm/>
    
      
    

      </>  */}