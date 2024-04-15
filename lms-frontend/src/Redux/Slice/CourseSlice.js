import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helpers/axiosInstance"

const initialState = {
   courseData: []
}
export const getAllCourse = createAsyncThunk('/course/get', async () => {
    try{
      const response = axiosInstance('/courses' );
      toast.promise(response , {
        success:"Course fetched successfully",
        error:"Failed to load...",
        loading:"Fetching courses..."
      })
return(await response).data.courses;
    }catch(error){
        toast.error(error?.reponse?.data?.message)
    }
})


// export const deleteCourse = createAsyncThunk("/course/delete", async (id) => {
//   try {
//       const response = axiosInstance.delete(`/courses/${id}`);
//       toast.promise(response, {
//           loading: "deleting course ...",
//           success: "Courses deleted successfully",
//           error: "Failed to delete the courses",
//       });

//       return (await response).data;
//   } catch(error) {
//       toast.error(error?.response?.data?.message);
//   }
// }); 

export const createNewCourse = createAsyncThunk("/course/create", async (data) => {
  try {
      let formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("category", data?.category);
      formData.append("createdBy", data?.createdBy);
      formData.append("thumbnail", data?.thumbnail);

      const response = axiosInstance.post("/courses", formData);
      toast.promise(response, {
          loading: "Creating new course",
          success: "Course created successfully",
          error: "Failed to create course"
      });

      return (await response).data

  } catch(error) {
      toast.error(error?.response?.data?.message);
  }
});




const CourseSlice =  createSlice({
   name: "course",
   initialState,
   reducers: {
     
   },
   extraReducers: (builder) => {
     builder
      .addCase(getAllCourse.fulfilled, (state, action) => {
        if(action.payload.length === 0) toast.error("No courses found")
       if(action.payload)
{
    state.courseData = [...action.payload];
}        
      })
   }
})

export default CourseSlice.reducer;