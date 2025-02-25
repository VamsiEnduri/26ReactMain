import React from 'react'

const Child1 = ({setCount}) => {
  return (
    <div><button onClick={()=>setCount(x=>x+1)}>+</button></div>
  )
}

export default Child1