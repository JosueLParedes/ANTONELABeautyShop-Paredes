import React from "react"
import {Navbar, Nav, Container} from "react-bootstrap"
import {Link, Outlet} from "react-router-dom"

const NavbarE = () => {
    return (
        <div>
            <>
 
  <Navbar className ="navBackg"  variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as = {Link} to = "/" className="mx-auto">ANTONELA BeautyShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className= "ms-auto">
      <Nav.Link as = {Link} to = "/">Home</Nav.Link>
      <Nav.Link as = {Link} to = "/contact">Contact</Nav.Link>
      <Nav.Link as = {Link} to = "/products">Products</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<section>
  <Outlet></Outlet>
</section>
</>
        </div>
    )
}

export default NavbarE