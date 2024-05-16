import { createSlice } from '@reduxjs/toolkit'
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: null
    },
    reducers: {
        
    }
})

export const { setReduxCart: setReduxCart, setLogOut } = CartSlice.actions
export default CartSlice.reducer