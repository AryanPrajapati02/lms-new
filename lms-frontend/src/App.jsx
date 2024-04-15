import { useState } from 'react'

import './App.css'

import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import CourseList from './pages/Course/CourseList'
import Contact from './pages/Contact'
import Denied from './pages/Denied'
import CourseDescription from './pages/Course/CourseDescription'
import RequireAuth from './components/Auth/RequireAuth'
import CreateCourse from './pages/Course/CreateCourse'
import Profile from './pages/User/Profile'
import EditProfile from './pages/User/EditProfile'
import Checkout from './pages/Payments/Checkout'
import CheckoutSuccess from './pages/Payments/CheckoutSuccess'
import CheckoutFailure from './pages/Payments/CheckoutFailure'
import Displaylectures from './pages/Dashboard/DisplayLectures'
import AddLecture from './pages/Dashboard/AddLecture'





function App() {

  return (
    <>
  <Routes>

   

     <Route path='/' element={<HomePage />}></Route>
  
     <Route path='/about' element={<AboutUs />}></Route>
     <Route path='/courses' element={<CourseList />}></Route>
     <Route path='/course/description' element={<CourseDescription />}></Route>
     <Route path='/contact' element={<Contact />}></Route>
     <Route path='/signup' element={<SignUp />}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/denied' element={<Denied />}></Route>


     <Route element={<RequireAuth allowedRoles={["ADMIN"]} />} >
          <Route path="/course/create" element={<CreateCourse />} />
    </Route>

    <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<Displaylectures />} />
          
     </Route>

     <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
         
          <Route path="/course/addlecture" element={<AddLecture />} />
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        </Route>


     <Route path='*' element={<NotFound />}></Route>

  </Routes>  

    

    </>
 
  )
  
}

export default App
