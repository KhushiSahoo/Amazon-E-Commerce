import React from 'react'
import {Container , Navbar , Nav} from "react-bootstrap";
const Header = () => {
    return (
        <header>
         <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
         <Container fluid>
         <Navbar.Brand href="/">SHOPIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className="ml-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
        <Nav.Link href="/Login"><i className='fas fa-user'></i>SIGN IN</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Container>
    </Navbar>
        </header>
    )
}

export default Header

