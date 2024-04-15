import React from 'react'
import HomeLayout from '../layout/HomeLayout'
import { useState  } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast'
import { createAccount } from '../Redux/Slice/AuthSlice';
import { BsPersonCircle } from 'react-icons/bs';
// import Button from '../components/Button'

import { MdKeyboardBackspace } from "react-icons/md";
function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [previewImage, setPreviewImage] = useState("");

  const [signupData, setSignupData] = useState({
      name: "",
      email: "",
      password: "",
      avatar: ""
  });

  function handleUserInput(e) {
      const {name, value} = e.target;
      setSignupData({
          ...signupData,
          [name]: value
      })
  }

  function getImage(event) {
      event.preventDefault();
      // getting the image
      const uploadedImage = event.target.files[0];

      if(uploadedImage) {
          setSignupData({
              ...signupData,
              avatar: uploadedImage
          });
          const fileReader = new FileReader();
          fileReader.readAsDataURL(uploadedImage);
          fileReader.addEventListener("load", function () {
              setPreviewImage(this.result);
          })
      }
  }

  async function createNewAccount(event) {
      event.preventDefault();
     
    if(!signupData.name || !signupData.email || !signupData.password){
      return toast.error('Please fill all the fields')
    }
    if(signupData.password.length < 6){
      return toast.error('Password must be at least 6 characters')
    }
    if(signupData.password.length > 20){
      return toast.error('Password must be at most 20 characters')
    }
    if(!signupData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)){
      return toast.error('Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character')
    }
    if(!signupData.email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
      return toast.error('Please enter a valid email')
    }

    if(signupData.name.length < 4){
     return  toast.error("Name must be at least 5 characters")
    }


      const formData = new FormData();
      formData.append("name", signupData.name);
      formData.append("email", signupData.email);
      formData.append("password", signupData.password);
      formData.append("avatar", signupData.avatar);

      // dispatch create account action
      const response = await dispatch(createAccount(formData));
      if(response?.payload?.success)
          navigate("/");

      setSignupData({
          name: "",
          email: "",
          password: "",
          avatar: ""
      });
      setPreviewImage("");


  
    // console.log(signup)  
  }

  return (
   <HomeLayout>

    <div className='flex flex-col items-center justify-center   mt-[12vh] mb-[12vh]'>
    
        <form  noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-2xl'>
        <button onClick={()=>navigate(-1)}><MdKeyboardBackspace size={"25px"} /></button>
            <h1 className='text-center text-2xl font-bold '>Registration</h1> 

            <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className='w-24 h-24 rounded-full m-auto' />
                        )}
                    </label>
                    <input 
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />

              <div className='flex flex-col gap-2'>
               <label htmlFor="name" className='font-semibold text-white'>Full name :</label> 
                <input type="text" id='name' name='name' onChange={handleUserInput} required  className='bg-zinc-400 h-7 rounded-lg px-3 py-4 outline-none   active:bg-slate-500' value={signupData.name} />
              
        
     
              </div>
              <div className='flex flex-col gap-2'>
               <label htmlFor="email" className='font-semibold text-white'>Email : </label> 
                <input type="email" id='email' name='email' required onChange={handleUserInput} className='bg-zinc-400 h-7 rounded-lg px-3 py-4 outline-none   active:bg-slate-500' value={signupData.email} />
              
        
     
              </div>
              <div className='flex flex-col gap-2'>
               <label htmlFor="password" className='font-semibold text-white'>password : </label> 
                <input type="password" id='password' name='password' required onChange={handleUserInput} className='bg-zinc-400 h-7 rounded-lg px-3 py-4 outline-none   active:bg-slate-500' value={signupData.password} />
              
              </div>

             <div className='flex justify-center items-center '>
             <button className='mt-5 mb-2  py-2 w-fit px-5 rounded-2xl bg-green-400 text-black font-medium hover:bg-green-500 transition-all ease-in-out duration-300 '>Create Account</button>
             </div>
             <p className='text-center mb-3'>
              Already have an account? <Link to='/login'className='text-blue-500 hover:text-green-500 transition-all ease-in-out duration-300 ' >Login here</Link>
             </p>
           
         
        </form>


    </div> 
   
    
   </HomeLayout>
  )
}

export default SignUp