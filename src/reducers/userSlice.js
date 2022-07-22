import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    yes : " "
}


export const dataToSlice = createSlice({
    name:"UserData",
    initialState,
    reducers:{
        userData (state,action){
            state.yes = action.payload
        },
        logout(state,action){
            state.yes={}
        }
       
    }
})



export const {userData,logout} = dataToSlice.actions

export default dataToSlice.reducer