import React from 'react'
import "./Banner.css"
export const Banner = () => {
  return (
    <div className='banner'>
        <div id='banner-left'>
            <button>ExploreNow</button>
            <button>CallUs</button>
            {/* <Button text="login"/>
            <Button text="signUp"/> */}
        </div>
        <div id='banner-right'>
            <img src="https://media.istockphoto.com/id/134107278/photo/water-falling.jpg?s=612x612&w=0&k=20&c=vcuCu0umVRJC6zrJ2IT07TwlL8LLZiQJpvssFdGVbLQ=" alt="" width={600}/>
        </div>
    </div>
  )
}


// function Button (props){
//     return(
//         <div>
// {props.text}
//         </div>
//     )
// }
