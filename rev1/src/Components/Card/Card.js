// import React from 'react'

// export const Card = (cardInfo) => {
//     console.log(cardInfo)
//   return (
//     <div style={{textAlign:"center",marginBottom:"100px"}}>
//         <img src={cardInfo.imgUrl} alt="" width={300}/>
//         <h3>{cardInfo.title}</h3>
//         <span>{cardInfo.price}</span>
//         <button>{cardInfo.btn1}</button>
//         <button>{cardInfo.btn2}</button>
//     </div>
//   )
// }


import React from 'react'
import "./Card.css"

const Card = (cardInfo) => {
    const styleCard={
        br:"2px solid black"
    }
    console.log(cardInfo)
  return (
    <div style={{border:styleCard.br}} className='card'>
        <img src={cardInfo.imgUrl} alt="" width="40%"/>
        <p>{cardInfo.title}</p>
        <span>${cardInfo.price}</span>
        <button>{cardInfo.cartBtn}</button>
        <button>{cardInfo.buyNow}</button>
    </div>
  )
}

export default Card

// export default Card