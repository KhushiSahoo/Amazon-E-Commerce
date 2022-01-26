import React, { useState } from 'react'
import {  Button , Row , Col , ListGroup , Image , Card, ListGroupItem} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link ,  useNavigate } from 'react-router-dom';

import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const placeOrderHandler =() =>{
        console.log('order placed');
    }
  return(
    <>
    <CheckoutSteps step1 step2 step3 step4/>
    <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h5>Shipping</h5>
                    <p>
                        <strong>
                            Address : 
                        </strong>
                        {cart.shippingAddress.address},
                        {cart.shippingAddress.city} , {' '}
                        {cart.shippingAddress.postalCode} ,{' '}
                        {cart.shippingAddress.country}
                    </p>
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Payment Method</h5>
                    <strong>Method :</strong>
                    {cart.paymentMethod}
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Order Items</h5>
                    {cart.cartItems.length===0 ? <Message>Your Cart is empty !!</Message> : (
                        <ListGroup variant='flush'>
                         {cart.cartItems.map((item , index)=>(
                             <ListGroupItem key={index}>
                              <Row>
                                  <Col md={1}>
                                      <Image src={item.image} alt ={item.name} fluid rounded />
                                  </Col>
                                  
                                  <Col>
                                  <Link to ={`/product/${item.product}`}>
                                      {item.name}
                                  </Link>
                                  </Col>

                                  <Col md={4}>
                                      {item.qty} X Rs. {item.price} = Rs.{item.qty * item.price}
                                  </Col>
                              </Row>
                             </ListGroupItem>
                         ))}
                        </ListGroup>
                    )}
                </ListGroupItem>

            </ListGroup>
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                     <h5>
                      Order Summary
                     </h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Items
                            </Col>
                            <Col>
                            Rs.{cart.itemsPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Shipping
                            </Col>
                            <Col>
                            Rs.{cart.shippingPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Tax
                            </Col>
                            <Col>
                            Rs.{cart.taxPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Total
                            </Col>
                            <Col>
                            Rs.{cart.totalPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button type='button' className='btn btn-block' 
                        disabled ={cart.cartItems.length===0}
                        onClick={placeOrderHandler}>
                        Place Order
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  ) 
};

export default PlaceOrderScreen;
