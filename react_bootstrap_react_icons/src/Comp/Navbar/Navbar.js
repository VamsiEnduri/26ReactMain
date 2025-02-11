import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { CiShoppingCart } from "react-icons/ci"
import Badge from 'react-bootstrap/Badge';

import "./Navbar.css"
const Navbar1 = () => {
    console.log(typeof Navbar)
  return (
    <>
        <Navbar bg='primary' style={{backgroundColor:"red"}} expand="md" className='navbar'> 
            <Navbar.Brand>VamsiMart</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse className='collapse'>
          <Nav style={{gap:20}}>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
<Button variant='success'>Login</Button>
<Button variant='danger'>
    <CiShoppingCart size={20} ></CiShoppingCart>
    <Badge style={{top:-10}}>10</Badge>

    </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default Navbar1