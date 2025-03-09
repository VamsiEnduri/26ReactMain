import React ,{useContext}from 'react'
import { counterAppContext } from '../App'

function Dec() {
    const {count,setCount}=useContext(counterAppContext)
  return (
    <div>
        <button onClick={()=>setCount(count-10)}>-</button>
    </div>
  )
}

export default Dec