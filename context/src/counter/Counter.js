import React ,{useContext}from 'react'
import { counterAppContext } from '../App'
const Counter = () => {
    const {count}=useContext(counterAppContext)
    console.log(count)
  return (
    <div>
        {/* <button onClick={()=>setCount(count-1)}>-</button>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button> */}



        {count}
    </div>
  )
}

export default Counter