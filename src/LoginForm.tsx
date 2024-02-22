//import React from 'react';
import { useState } from 'react'
import {useForm, SubmitHandler} from "react-hook-form";
import './LoginForm.css'
//import RegistrationForm from './RegistrationForm';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


type FormValue = {
  email: string,
  password: string
}


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<FormValue>()
  const [data, setData] = useState({ email: '', password: '' })
  const onSubmit: SubmitHandler <FormValue> = (data) => {
      console.log("final data", data)
      alert(data.email)
  }
  
  return (
    
    <div className='wrapper'>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" 
          placeholder='Email'
          {
            ...register("email", {
                required: "Email is required",
                pattern: {
                    value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email"
                }
              })
            }
          />
           {
            errors.email && (
            <p className='error-msg'>{errors.email.message}</p>
            )
           }
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder='Password'
          required
          {
            ...register("password", {
                required: "Password is required",
                minLength: {
                    value: 10,
                    message: "Password Should be atlease 10 char"
                }
            })
            } />
             {
                errors.password && (
                <p className='error-msg'>{errors.password.message}</p>
                 )
                }
          <FaLock className='icon'/>
        </div>
       
        <button type='submit'> Log In </button>
        <div className="register-link">
           <p>Don't have an Account? <Link to="register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
