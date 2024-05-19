import { createSlice } from '@reduxjs/toolkit'
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [


        ]
    },
    reducers: {
        addCartItem: (state, action) => {
            console.log("Added item in Cart");
            let { name, _id, price, image } = action.payload


            state.value.push(
                {
                    _id,
                    name,
                    price,
                    image,
                    quantity: "1",
                }
            )

        },
        resetCart: (state, action) => {
            console.log("Cart Item reset!");
        },

    }
})

export const { addCartItem, resetCart } = CartSlice.actions
export default CartSlice.reducer