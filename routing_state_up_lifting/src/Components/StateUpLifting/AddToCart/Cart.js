import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <div>
        {cartItems.map(x=>{
            return(
                <>
                {x.name}
                </>
            )
        })}
    </div>
  )
}

export default Cart