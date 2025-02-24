import React from 'react'
import {Navbar,Container,Nav,Button,Badge} from "react-bootstrap"
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css"
const Navbar1 = () => {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >VamsiMart</Navbar.Brand>
          <Nav className='navLinks'>
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Button variant="primary">Login</Button>
            <Button variant="primary">SignUp</Button>
           <Button> <IoCartOutline style={{color:"white",fontSize:50}} size={"30"}/>
           <Badge bg="secondary" style={{top:-10}}>9</Badge></Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1