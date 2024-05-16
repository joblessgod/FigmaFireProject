import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'cart',
    initialState: {
        value: null
    },
    reducers: {
        setReduxUser: (state, action) => {
            console.log("Changed form Redux");
            state.value = action.payload
        },
        setLogOut: (state, action) => {
            state.value = null;
        }
    }
})

export const { setReduxUser, setLogOut } = userSlice.actions
export default userSlice.reducer