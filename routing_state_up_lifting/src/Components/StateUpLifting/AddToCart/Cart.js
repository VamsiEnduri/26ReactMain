// import React, { useState } from 'react'

// const Cart = ({cartItems}) => {
//   // const [loading,setLoading]=useState(true)

//   if(true){
//     return <h1>loading cartItems</h1>
//   }
//   return (
//     <div>
//         {cartItems.map(x=>{
//             return(
//                 <>
//                 {x.name}
//                 </>
//             )
//         })}
//     </div>
//   )
// }

// export default Cart





import React, { useEffect, useState } from "react";

const Cart = ({ cartItems }) => {
  const [cart, setCart] = useState([]);

  // Update the state when new cartItems are received
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  if (cart.length === 0) {
    return <h1>Loading Cart Items...</h1>;
  }

  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
