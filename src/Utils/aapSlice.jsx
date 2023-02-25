import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        ismenuOpen:true,
    },
    reducers:{
        togggleMenu:(state)=>{
            state.ismenuOpen=!state.ismenuOpen;

        },
        closeMenu:(state)=>{
            state.ismenuOpen=false;
        },
    }
})

export const {togggleMenu,closeMenu}=appSlice.actions
export default appSlice.reducer