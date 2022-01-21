import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails} from '../actions/userActions'
import {  useNavigate  } from 'react-router-dom';


const ProfileScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
   
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
    
  
    useEffect(() => {
      if (!userInfo) {
        navigate('/login')
      }else{
          console.log(user);
          if(!user.name){
              dispatch(getUserDetails('profile'))
          }else{
                setName(user.name)
                setEmail(user.email)

          }
      }
    }, [ dispatch , navigate , userInfo , user])
  
    const submitHandler = (e) => {
      e.preventDefault();
      //dispatch register
      if(password !== confirmPassword){
          setMessage('Password do not match')
      }else{
       //dispatch update profile
      }
      
    }
      
  return(
    <Row>
        <Col md={3}>
        <h3>User Profile</h3>
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

      <Button type='submit' variant='primary'>
        Update
      </Button>
    </Form>

        </Col>
        <Col md={8}>
            <h4>
                My Orders!
            </h4>
        </Col>
    </Row>
  
  );
};

export default ProfileScreen;

