import { createSlice } from "@reduxjs/toolkit";

const AppReducer = createSlice({
    name: "App",
    initialState: {
        isLoggedIn: false,
        loggedInUser:{},
        role:"",
        token:""
    },
    reducers:{
        logIn:(state, {payload})=>{
            state.isLoggedIn = true;
            state.loggedInUser = payload
            state.role = payload?.data?.role
        },
        saveToken:(state,{payload})=>{
            state.token = payload
        },
        logOut:(state)=>{
            state.isLoggedIn = false;
            state.loggedInUser = {}
        },
    }
})
export const {logIn, logOut,saveToken} = AppReducer.actions;
export default AppReducer.reducer;