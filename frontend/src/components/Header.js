import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Navbar , Nav, NavDropdown} from "react-bootstrap";
import {useDispatch , useSelector} from 'react-redux';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';
const Header = () => {
    const dispatch = useDispatch();
    const  userLogin = useSelector(state => state.userLogin);
    const {userInfo}= userLogin;
    console.log(userInfo);
    const logoutHandler = () =>{
        dispatch(logout())
    }
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
            <SearchBox/>
        <Nav
        className="ml-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
         <LinkContainer to='/cart'>
          <Nav.Link ><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
         </LinkContainer>
         {userInfo ? (
             <NavDropdown title={userInfo.name} id='username'>
           <LinkContainer to='/profile'>
               <NavDropdown.Item>Profile</NavDropdown.Item>
           </LinkContainer>
           <NavDropdown.Item onClick={logoutHandler}>
              Logout
           </NavDropdown.Item>
             </NavDropdown>
         ) 
         :(<LinkContainer to ="/login">
         <Nav.Link><i className='fas fa-user'></i>SIGN IN</Nav.Link>
         </LinkContainer>)
        
         }
         
        
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Container>
    </Navbar>
        </header>
    )
}

export default Header;

