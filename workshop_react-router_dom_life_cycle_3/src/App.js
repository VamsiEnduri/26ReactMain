import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [data,setData]=useState([])
  let [filItems,setFilItems]=useState([]);
  useEffect(()=>{
         fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
          console.log(res)
          setData(res)
         }).catch(err=>console.log(err))
  },[])
  console.log(data,"data")

  const filteredDataHandle=(cat)=>{
        let filData=data.filter(item=>item.category === cat)
        setFilItems(filData)
  }
  console.log(filItems,"fil data")
 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <button onClick={()=>filteredDataHandle("women's clothing")}>Womens</button>
      <button onClick={()=>filteredDataHandle("men's clothing")}>mens</button>
      <button onClick={()=>filteredDataHandle("electronics")}>Electronics</button>
      <button onClick={()=>filteredDataHandle("jewelery")}>jewelery</button>


      {filItems.map(x=>{
        return(
          <div>
            {x.title}
          </div>
        )
      })}
    
      {/* {data.map(x=>{
        return(
          <div>
            <span>{x.id}</span>
            <h1>{x.title}</h1>
            <p>{x.price}</p>
          </div>
        )
      })} */}
     
    </>
  );
}

export default App;