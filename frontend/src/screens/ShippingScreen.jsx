import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import {  useNavigate , useLocation   } from 'react-router-dom';
import FormContainer from '../components/FormContainer'


const ShippingScreen = () => {
  const [address , setAddress] = useState('');
  const [city , setCity] = useState('');
  const [postalCode , setPostalCode] = useState('');
  const [country , setCountry] = useState('');

  const submitHandler =(e) =>{
    e.preventDefault();
    console.log('submitted');
  }

  return <FormContainer>
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
      <Button type='submit' variant='primary'>
        Continue
      </Button>
      </Form>
  </FormContainer>;
};

export default ShippingScreen;
