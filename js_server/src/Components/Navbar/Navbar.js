import React ,{useEffect,useState }from 'react'
import {Link,useNavigate} from "react-router-dom"
import {Navbar,Nav,Container, Badge, Button} from "react-bootstrap"
import { FaOpencart } from "react-icons/fa6";
import axios from 'axios';
const Navbar1 = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5000/cartItems")
        .then((res) => {
          console.log(res.data);
          setCartItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    const navigate=useNavigate()
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav style={{display:"flex",gap:20,alignItems:"center"}}>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Button onClick={()=>navigate("/addRecipe")}>AddRecipe</Button>
           <Button onClick={()=>navigate("/cart")}> <FaOpencart style={{color:"white",fontSize:30}}/>
           <Badge>{cartItems.length}</Badge></Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1