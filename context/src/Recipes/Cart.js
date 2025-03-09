import React ,{useContext} from 'react'
import { recipesContext } from '../App'

const Cart = () => {
    const {cartItems,setCartItems}=useContext(recipesContext)
  return (
    <div>
        {cartItems.map(x=>{
            return(
                <div>
                    <img src={x.image} alt="" width={100}/>
                    <button onClick={()=>{
                             setCartItems(cartItems.filter(item=>item.id !== x.id))
                             alert("item dkleted !!")
                    }}>RemoveCart</button>
                </div>
            )
        })}
    </div>
  )
}

export default Cart