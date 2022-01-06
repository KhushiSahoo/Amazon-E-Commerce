import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Navbar , Nav} from "react-bootstrap";
const Header = () => {
    return (
        <header>
         <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
         <Container fluid>
             <LinkContainer to ='/'>
             <Navbar.Brand >SHOPIFY</Navbar.Brand>
             </LinkContainer>
         
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className="ml-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
         <LinkContainer to='/cart'>
          <Nav.Link ><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
         </LinkContainer>
         
         <LinkContainer to ="/Login">
         <Nav.Link><i className='fas fa-user'></i>SIGN IN</Nav.Link>
         </LinkContainer>
        
        
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Container>
    </Navbar>
        </header>
    )
}

export default Header

