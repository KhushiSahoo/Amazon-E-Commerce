import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import {  useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';


const ShippingScreen = () => {
  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart
  const [address , setAddress] = useState(shippingAddress.address);
  const [city , setCity] = useState(shippingAddress.city);
  const [postalCode , setPostalCode] = useState(shippingAddress.postalCode);
  const [country , setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler =(e) =>{
    e.preventDefault();
    dispatch(saveShippingAddress({address , city , postalCode , country}))
    navigate('/payment')
    console.log('submitted');

  }

  return <FormContainer>
    <CheckoutSteps step1 step2/>
      <h4>Shipping</h4>
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='address'>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter ur address'
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='city'>
        <Form.Label>City</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter city'
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='postalCode'>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter the postalCode'
          required
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='country'>
        <Form.Label>Country</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter the country'
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' variant='primary'style={{marginTop:"15px"}}>
        Continue
      </Button>
      </Form>
  </FormContainer>;
};

export default ShippingScreen;
