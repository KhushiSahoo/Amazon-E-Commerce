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
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  

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
          label='Cash on Delivery'
          id='COD'
          name='paymentMethod' 
          value='Cash on Delivery' 
          checked onChange={(e)=>setPaymentMethod(e.target.value)}>
       
          </Form.Check>
          <Form.Check 
          type='radio'
          label='RazorPay'
          id='RazorPay'
          name='paymentMethod' 
          value='RazorPay' 
           onChange={(e)=>setPaymentMethod(e.target.value)}>
       
          </Form.Check>
          </Col>
      </Form.Group>
      <Button type='submit' variant='primary' style={{marginTop:"15px"}}>
        Continue
      </Button>
      </Form>
  </FormContainer>)
  
};

export default PaymentScreen;
