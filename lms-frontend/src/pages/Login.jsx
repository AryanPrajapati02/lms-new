import React from 'react'
import HomeLayout from '../layout/HomeLayout'
import { useState  } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast'
import { login } from '../Redux/Slice/AuthSlice';
// import Button from '../components/Button'

import { MdKeyboardBackspace } from "react-icons/md";
function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
 

  const [loginData, setLoginData] = useState({
     
      email: "",
      password: "",
     
  });

  function handleUserInput(e) {
      const {name, value} = e.target;
      setLoginData({
          ...loginData,
          [name]: value
      })
  }



  async function onLogin(event) {
      event.preventDefault();
     
   

      const formData = new FormData();
     
      formData.append("email", loginData.email);
      formData.append("password", loginData.password);
      

      // dispatch create account action
      const response = await dispatch(login(formData));
      if(response?.payload?.success)
          navigate("/");

      setLoginData({
        
          email: "",
          password: "",
         
      });
     


  
    // console.log(signup)  
  }

  return (
   <HomeLayout>

    <div className='flex flex-col items-center justify-center   mt-[12vh] mb-[12vh]'>
    
        <form  noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-2xl'>
        <button onClick={()=>navigate(-1)}><MdKeyboardBackspace size={"25px"} /></button>
            <h1 className='text-center text-2xl font-bold '>Login</h1> 

            
             
              <div className='flex flex-col gap-2'>
               <label htmlFor="email" className='font-semibold text-white'>Email : </label> 
                <input type="email" id='email' name='email' required onChange={handleUserInput} className='bg-zinc-400 h-7 rounded-lg px-3 py-4 outline-none   active:bg-slate-500' value={loginData.email} />
              
        
     
              </div>
              <div className='flex flex-col gap-2'>
               <label htmlFor="password" className='font-semibold text-white'>password : </label> 
                <input type="password" id='password' name='password' required onChange={handleUserInput} className='bg-zinc-400 h-7 rounded-lg px-3 py-4 outline-none   active:bg-slate-500' value={loginData.password} />
              
              </div>

              <div className='flex justify-center items-center '>
             <button className='mt-5 mb-2  py-2 w-fit px-5 rounded-2xl bg-blue-400 text-black font-medium hover:bg-green-500 transition-all ease-in-out duration-300 '>Login </button>
             </div>
             <p className='text-center mb-3'>
              Not have an account? <Link to='/signup'className='text-blue-500 hover:text-green-500 transition-all ease-in-out duration-300 ' >Create account</Link>
             </p>
           
         
        </form>


    </div> 
   
    
   </HomeLayout>
  )
}

export default Login