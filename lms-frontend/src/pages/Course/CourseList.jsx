import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getAllCourse } from '../../Redux/Slice/CourseSlice';
import HomeLayout from '../../layout/HomeLayout';
import CourseCard from '../../components/CourseCard'

function CourseList() {


const dispatch = useDispatch();
const {courseData} = useSelector(state => state.course);

async function loadCourses(){
   await dispatch(getAllCourse());
}

useEffect(()=>{
   loadCourses();
} , [])

  return (
   <HomeLayout>
    <div className='min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white '>
    <h1 className="text-center text-3xl font-semibold mb-5 gap-3 ">
                    Explore the courses made by
                    <span className="font-bold text-yellow-500 ml-3">
                        Experts
                    </span>
                </h1>
                <div className='mb-10 flex flex-wrap gap-14'>
                  {courseData?.map((element)=>{
                     return <CourseCard data={element} key={element._id}/>
                  })}
                </div>
    </div>
   </HomeLayout>
  )
}

export default CourseList