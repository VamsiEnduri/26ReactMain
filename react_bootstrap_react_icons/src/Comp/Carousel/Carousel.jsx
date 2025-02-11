import React from 'react'
import k from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import Carousel from "react-bootstrap/Carousel"
const Carousel1 = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img src={k} alt="" className='w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="" className='w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={k} alt="" className='w-100'/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Carousel1