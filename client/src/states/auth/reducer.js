import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { API_URL } from "../../constants";


const initialState = {};
export const loginAsync = createAsyncThunk(async (payload) => {
    console.log(payload);
    // const data = await axios.post(`${API_URL}/users/login`)
    return 1;
});
const authSlice = createSlice({
    initialState,
    reducer: {
        login:(state,action)=>{
            return state;
        }
    },
    extraReducers: {
        [loginAsync.fulfilled]: (state, action) => {
           console.log(state);
        },

    }
})
const {actions, reducer} = authSlice;
export const {login} = actions
export default reducer;