import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        token: null,
        profilePicture: null, 
        localId: null,
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload.email,
            state.token = action.payload.idToken,
            state.localId = action.payload.localId
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        },
        setLogOutUser: (state, action) => {
            state.user = null;
            state.token = null;
            state.v = null;
        }
    }   
})

export const {setUser, setProfilePicture, setLogOutUser} = authSlice.actions

export default authSlice.reducer