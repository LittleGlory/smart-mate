//import React from 'react';
import { useState } from 'react'
import {useForm, SubmitHandler} from "react-hook-form";
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


type FormValue = {
    Firstname:string,
    Lastname:string,
    email: string,
    password: string
  }

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormValue>()
    const [data, setData] = useState({ email: '', password: '' })
    const onSubmit: SubmitHandler <FormValue> = (data) => {
        console.log("final data", data)
        alert(data.email)
    }
  return (
    
    <div className='wrapper'>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <br/><br/>
        <div className="input-box name">
          <input type="text" placeholder='Firstname'required />
          <input type="text" placeholder='Lastname'required />
        </div>
        <div className="input-box">
          <input type="text" 
          placeholder='Email'
          required 
          {
            ...register("email", {
                required: "Email is required",
                pattern: {
                    value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email"
                }
              })
            }/>
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
            }
             />
              {
                errors.password && (
                <p className='error-msg'>{errors.password.message}</p>
                 )
                }
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder='Confirm Password'
          required 
          />
          <FaLock className='icon'/>
        </div>
        
        <button type='submit'> Register Now </button>
    
        <div className="register-link">
           <p>Already have an Account? <Link to="/">Login Here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
