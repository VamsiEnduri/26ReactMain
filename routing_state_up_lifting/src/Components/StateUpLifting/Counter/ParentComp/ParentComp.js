import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const ParentComp = () => {
    const [count,setCount]=useState(0)
  return (
    <div style={{display:"flex",justifyContent:'center',fontSize:50,flexDirection:"column",alignItems:"center"}}>
        {count}
       <div style={{display:"flex",justifyContent:'center'}}>
       <Child1 setCount={setCount}/>
       <Child2 setCount={setCount}/>
       </div>
    </div>
  )
}

export default ParentComp