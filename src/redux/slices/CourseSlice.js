import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";

const initialState ={
    courseData:[]
}

export const getAllCourses=createAsyncThunk("/course/get",async ()=>{
    try {
        const response =axiosInstance.get("/courses");
        toast.promise(response,{
            loading:"loading course data....",
            sucess:"Course loading successfully",
            error:"Failed to get the courses"
        })
        return (await response).data.courses
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const courseSlice= createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            console.log(action);
            if(action.payload){
                state.courseData=[...action.payload]
            }
            console.log(state.courseData);
        })

    }
});

export default courseSlice.reducer