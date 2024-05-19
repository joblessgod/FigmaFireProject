import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cartItem = useSelector((store)=> store.cart.value)

    useEffect(() => {
    axios.get("")
    
    }, [])
  return (
    
    <>
    <div>
        {JSON.stringify(cartItem)}



    </div>
    </>
  )
}
