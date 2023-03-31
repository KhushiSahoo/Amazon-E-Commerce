import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import {  useNavigate , useLocation   } from 'react-router-dom';


const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
   
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const search = useLocation().search;
    console.log(search);
    const redirect = search ? search.split('=')[1] : '/';
    console.log(redirect);
    console.log(userInfo)
  
    useEffect(() => {
      if (userInfo) {
        navigate(redirect)
      }
    }, [ navigate , userInfo])
  
    const submitHandler = (e) => {
      e.preventDefault();
      //dispatch register
      if(password !== confirmPassword){
          setMessage('Password do not match')
      }else{
        dispatch(register(name , email , password))
      }
      
    }
      
  return(
    <FormContainer style={{minHeight:"80vh"}}>
    <h4 style={{marginTop:"20px"}}>Sign UP</h4>
    {message && <Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader />}
    <Form onSubmit={submitHandler}>
    <Form.Group controlId='name'>
        <Form.Label>Enter Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='confirmPassword'>
        <Form.Label>Confirm Password </Form.Label>
        <Form.Control
          type='password'
          placeholder='Re-enter password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary' style={{marginTop:"15px"}}>
        Register
      </Button>
    </Form>

    <Row className='py-3'>
      <Col>
        Have an Account ?{' '}
        <Link to='/login'>
          Login
        </Link>
      </Col>
    </Row>
  </FormContainer>
  );
};

export default RegisterScreen;
