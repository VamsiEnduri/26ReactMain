import React,{useContext} from 'react'
import { recipesContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const {color} =useContext(recipesContext)
  return (
    <div style={{backgroundColor:color,display:"flex",justifyContent:"center",gap:40,padding:50}}>
        <button onClick={()=>navigate("/recipes")}>Recipes</button>
        <button onClick={()=>navigate("/cart")}>Cart</button>
    </div>
  )
}

export default Navbar