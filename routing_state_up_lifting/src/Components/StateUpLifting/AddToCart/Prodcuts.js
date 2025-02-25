import React from 'react'

const Prodcuts = ({data,addToCart}) => {
  return (
    <div>
        {data.map(x=>{
            return(
                <div style={{border:"2px solid black",margin:3}}>
                    <h1>{x.name}</h1>
                    <p>{x.price}</p>
                    <button onClick={()=>addToCart(x)}>AddToCart</button>
                </div>
            )
        })}
    </div>
  )
}

export default Prodcuts