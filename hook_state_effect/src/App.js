import React ,{useState}from 'react'

const App = () => {
  const [show,setShow]=useState()
// console.log(useState)
 

  // const x=0
 
  // console.log(x)
  // console.log(y)
  // console.log(useState())
  // const a=useState()
  // console.log(a,"usestate")
  // const b=useState()

  // [undefined, f()]

  // console.log(b,"b")
  // const [x,y]=b;


  // console.log(x)
  // const [x,y]=b

  // const [a,b]=useState()


//  it is a hook in react which consists of 2 args , first one is varaible r initial value
//                            and 2nd arg is a callback function r updater function

  const [count,setCount]=useState(0)
  function inc(){
    setCount(count+10)
  }
  function dec(){
    setCount(count-10)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={dec} disabled={count===0}>-</button>
    {count}
      <button onClick={inc} disabled={count === 100}>+</button>



      {/*  */}
    </div>
  )
}

export default App