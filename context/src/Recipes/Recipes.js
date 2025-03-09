import React,{useContext} from 'react'
import { recipesContext } from '../App'

const Recipes = () => {
    const {data,setCartItems,cartItems}=useContext(recipesContext)
  return (
    <div>
        {data.map(x=>{
            return(
                <>
                <h1>{x.name}</h1>
                <button onClick={()=>{
                    setCartItems([...cartItems,x])
                    alert("item added to cart")
                }}>AddToCart</button>
                </>
            )
        })}
    </div>
  )
}

export default Recipes