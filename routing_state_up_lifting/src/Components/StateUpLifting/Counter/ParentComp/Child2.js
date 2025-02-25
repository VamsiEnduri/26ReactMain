import React from 'react'

const Child2 = ({setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(prev=>prev-1)}>-</button>
    </div>
  )
}

export default Child2