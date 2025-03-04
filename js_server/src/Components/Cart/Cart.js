import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [dlteDone,setDlteDone]=useState(false)
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    axios
      .get("http://localhost:5000/cartItems")
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data);
        setLoading(false
        )
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dlteDone]);

  if(loading){
    return <h1>cart items are loading wait a moment</h1>
  }
  const handleDeleteCartItem=async(xyz)=>{
   try{
 await  
        axios.delete(`http://localhost:5000/cartItems/${xyz.id}`)
        console.log(xyz)
        setDlteDone(xyz)
 alert("item dekleted from cartItems !!!!!")
   }catch(err){
    console.log(err)
   }
  }
  return (
    <div>
     {cartItems.length >0 ?  <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
          cartItems.map((x, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={x.image} alt="" width={70} />
                  </td>
                  <td>
                    <button onClick={()=>handleDeleteCartItem(x)}>Dlte</button>
                  </td>
                </tr>
              </>
            );
          })
          }
        </tbody>
      </Table>:"no items found in cart"}
    </div>
  );
};

export default Cart;
