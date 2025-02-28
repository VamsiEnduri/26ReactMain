import React from 'react'
import {useNavigate} from "react-router-dom"
import {Navbar,Nav,Button} from "react-bootstrap"
const Navbar1 = () => {
    const navigate=useNavigate()
  return (
    <div>

<Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Button variant="primary" className="me-2" onClick={() => navigate("/login")}>Login</Button>
          <Button variant="success" onClick={() => navigate("/signup")}>Signup</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    </div>
  )
}

export default Navbar1