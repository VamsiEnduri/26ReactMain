import React from 'react'
import { useEffect } from 'react'
// import xyz from "axios"
import { useState } from 'react'
import "./Prodcuts.css"
import { useNavigate } from 'react-router-dom'

const Products = ({data}) => {
    const navigate=useNavigate()
    // console.log(useNavigate(),"usenavifate")

  return (
    <div className='cardContainer'>
        {data.map(x=>{
            return(
                <div className='card' onClick={()=>navigate(`/products/${x.id}`)}>
                    <img src={x.image}/>
                    <p>{x.name}</p>
                    <span>{x.rating}</span>
                    <div>
                        <button>ingredients</button>
                        <button>instrcutions</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Products