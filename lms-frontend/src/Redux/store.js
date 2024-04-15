import {configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './Slice/AuthSlice';
import CourseSliceReducer from './Slice/CourseSlice';
import RazorpaySliceReducer from './Slice/RazorpaySlice';
import lectureSliceReducer from './Slice/LectureSlice';

const store = configureStore({
    reducer:{
      auth: authSliceReducer,
       course : CourseSliceReducer,
       razorpay : RazorpaySliceReducer,
       lecture: lectureSliceReducer
    },
    devTools: true
})

export default store;