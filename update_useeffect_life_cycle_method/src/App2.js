import React, { useEffect, useState } from 'react'

const App2 = () => {
    // const [count,setCountt]=useState("vamsi")
    const [count,setCountt]=useState(0)
    const [data,setData]=useState([])
    const [color,setColor]=useState("white")

    // mounting
    useEffect(()=>{
       alert("hello color changed from white to red")
    document.body.style.backgroundColor=color
    },[color])

    // mounting +updating
    useEffect(()=>{
        fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>{
            // console.log(res)
            setData([res.users])

            // setData([...data,res.users])
        }).catch(err=>{
            console.log(err)
          })
        //   console.log("updating")
    },[])
    console.log(data)
    //depedency array
  return (
    <div style={{backgroundColor:color}}>
        {}
        <button onClick={()=>setColor("red")}>color</button>
        <button onClick={()=>setCountt("ravi")}>Click</button>
        <br/>
        <button onClick={()=>setCountt(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCountt(count-1)}>-</button>
    </div>
  )
}

export default App2