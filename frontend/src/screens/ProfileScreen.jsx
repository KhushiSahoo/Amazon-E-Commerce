import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails , updateUserProfile} from '../actions/userActions'
import {  useNavigate  } from 'react-router-dom';
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { listMyOrders } from '../actions/orderActions'

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
    
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile
    
    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy
    console.log(orders);

    useEffect(() => {
      if (!userInfo) {
        navigate('/login')
      }else{
          console.log(user);
          if(!user.name){
              dispatch(getUserDetails('profile'))
              dispatch(listMyOrders())
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
       dispatch(updateUserProfile({id: user._id , name , email , password}));
      }
      
    }
      
  return(
    <Row style={{minHeight:"70vh" , margin:"10px" , padding:"10px"}}>
        <Col md={3}>
        <h4>User Profile</h4>
    {message && <Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {success && <Message variant='success'>Profile Updated !</Message>}
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

      <Button type='submit' variant='primary'style={{marginTop:"15px" }}>
        Update
      </Button>
    </Form>

        </Col>
        <Col md={8}>
            <h4>
                My Orders!
            </h4>
            {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                    orders.map((order)=>(
                      
                       <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.totalPrice}</td>
                        <td>
                         {order.isPaid ? (
                         order.paidAt.substring(0, 10)
                          ) : (
                         <i className='fas fa-times' style={{ color: 'red' }}></i>
                         )}
                         </td>
                         <td>
                         {order.isDelivered ? (
                           order.deliveredAt.substring(0, 10)
                         ) : (
                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                        )}
                      </td>
                      <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light' style={{marginTop:"15px"}}>
                        Details
                      </Button>
                    </LinkContainer>
                     </td>
                           
                        </tr>
                       
                        
                    ))
                }
              
            </tbody>
          </Table>
        )}
        </Col>
    </Row>
  
  );
};

export default ProfileScreen;