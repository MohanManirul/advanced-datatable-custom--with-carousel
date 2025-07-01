import { createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("user")) ;

const authSlice = createSlice({
    name : "auth",
    initialState:{
        user:userInfo || null
    },
    reducers : {
        login:(state, actions)=>{
            state.user = actions.payload;
            localStorage.setItem("user", JSON.stringify(actions.payload))
        },
        logout:(state)=>{
            state.user= null;
            localStorage.removeItem("user")
        }
    }
});

export const {login , logout} = authSlice.actions ;
export default authSlice.reducer ;