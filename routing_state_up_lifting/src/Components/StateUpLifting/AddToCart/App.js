import React, { useEffect, useState } from 'react'
import Prodcuts from './Prodcuts';
import Cart from './Cart';

const App = () => {
    const [cart,setCart]=useState([])


    useEffect(()=>{
            const cartItems=JSON.parse(localStorage.getItem("CartItems"))
            if(cartItems){
              setCart(cartItems)
            }
    },[])
    useEffect(()=>{
      localStorage.setItem("CartItems",JSON.stringify(cart))
    },[cart])
    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Tablet", price: 300 }
      ];
    
      const addToCart=(product)=>{
        setCart([...cart,product])
      }

      console.log(cart)
    
  return (
    <div>
        shooping cart
        <Prodcuts data={products} addToCart={addToCart}/>
        <Cart cartItems={cart}/>
    </div>
  )
}

export default App






