import React, { useState } from 'react'
import { Form, Button , Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import {  useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = () => {
    const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!shippingAddress){
      navigate('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  

  const submitHandler =(e) =>{
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
    console.log('payment Method selected');

  }
  return (
    <FormContainer>
    <CheckoutSteps step1 step2 step3/>
      <h4>Payment Method</h4>
      <Form onSubmit={submitHandler}>
      <Form.Group>
          <Form.Label as ='legend'>
           Select Method
          </Form.Label>
          <Col>
          <Form.Check 
          type='radio'
          label='Paypal or credit card'
          id='PayPal'
          name='paymentMethod' 
          value='PayPal' 
          checked onChange={(e)=>setPaymentMethod(e.target.value)}>
       
          </Form.Check>
          <Form.Check 
          type='radio'
          label='Stripe'
          id='Stripe'
          name='paymentMethod' 
          value='Stripe' 
           onChange={(e)=>setPaymentMethod(e.target.value)}>
       
          </Form.Check>
          </Col>
      </Form.Group>
      <Button type='submit' variant='primary'>
        Continue
      </Button>
      </Form>
  </FormContainer>)
  
};

export default PaymentScreen;
