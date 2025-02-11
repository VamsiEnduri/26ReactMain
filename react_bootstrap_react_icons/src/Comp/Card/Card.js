import React from 'react'
import "./Card.css"
import fakeStoreData from "../../data/data"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/esm/Button'
const Card1 = () => {
    console.log(Card)
  return (
    <div className='cardsContainer'>
        {fakeStoreData.map(item=>{
            return(
                <Card  className='card'>
            <Card.Img src={item.image} style={{padding:10,borderRadius:10}} className='img'/>
            <Card.Body>
                <Card.Title>
                  {item.title}
                </Card.Title>
                <Card.Text>
                 {item.price}
                </Card.Text>
                <Button>AddToCart</Button>
            </Card.Body>
        </Card>
            )
        })}
    </div>
  )
}

export default Card1