// import React,{createContext, useState } from 'react'
// import Counter from './counter/Counter'
// import Dec from './counter/dec'
// import { Inc } from './counter/inc'
// export const counterAppContext=createContext()  
// console.log(counterAppContext)
// const App = () => {
//   // const [count,setCount]=useState(0)
//   const [color,setColor]=useState("white")
//   return (
//     <>
//     <counterAppContext.Provider value={{count,setCount}}>  
//          {/* <Counter /> 
//          <Dec />
//          <Inc /> */}
//          {/* <ColorDisplay />  <div style={{backgroundColor:color}}>hello</div>
//          <Red />  -- >  const {color,setColor}=useContext(counterAppContext) --> <button onClick={()=>setColor("red")}>red</button>
//          <Blue />
//          <Yellow /> */}

         
//     </counterAppContext.Provider>
//     </>
//   )
// }

// export default App




import React ,{createContext, useEffect, useState} from 'react'
import Navbar from './Recipes/Navbar';
import Recipes from './Recipes/Recipes';
import { Route, Routes } from 'react-router-dom';
import Cart from './Recipes/Cart';
 export const recipesContext=createContext();
const App = () => {
  const [data,setData]=useState([])
  const [cartItems,setCartItems]=useState([])
  const color="lightblue"
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then(res=>res.json()).then(res=>{
      console.log(res)
      setData(res.recipes)
    })
  },[])

 
  
  return (
    <div>
      <recipesContext.Provider value={{data,color,cartItems,setCartItems}}>
        <Navbar />
          <Routes>
            <Route path="/recipes" element={ <Recipes />}/>
            <Route path="/cart" element={ <Cart />}/>
          </Routes>
      </recipesContext.Provider>
    </div>
  )
}

export default App