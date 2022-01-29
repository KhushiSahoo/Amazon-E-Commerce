import React, { useEffect} from 'react'
import {  Button , Row , Col , ListGroup , Image , Card, ListGroupItem} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link ,  useNavigate  , useParams} from 'react-router-dom';
import { getOrderDetails } from '../actions/orderActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const OrderScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    let { id } = useParams();
    console.log(id)
    const orderDetails = useSelector(state => state.orderDetails)
    const {order , loading , error} = orderDetails
    useEffect(()=>{
       dispatch(getOrderDetails(id))
    } , [id , dispatch])
    if(!loading){
       //calculate prices
    const addDecimals = (num) =>{
        return(Math.round(num*100)/100).toFixed(2);
    }
    order.itemsPrice = addDecimals(order.orderItems.reduce((acc , item)=> acc+ item.price * item.qty , 0));
    }
    
  return loading ? <Loader/> : error ? <Message variant = 'danger'>{error}</Message>:
  <>
  <h5>Order {order._id}</h5>
  <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h5>Shipping</h5>
                    <strong>Name:</strong>{order.user.name}<br/>
                    <strong>Email:</strong>{order.user.email}<hr/>
                    <p>
                        <strong>
                            Address : 
                        </strong>
                        {order.shippingAddress.city} , {' '}
                        {order.shippingAddress.postalCode} ,{' '}
                        {order.shippingAddress.country}
                        {order.shippingAddress.address},
                    </p>
                    {order.isDelivered ? <Message variant='success'> Delivered on {order.deliveredAt}</Message>:<Message variant='danger'>Not Delivered</Message>}
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Payment Method</h5>
                    <p>
                    <strong>Method :</strong>
                    {order.paymentMethod}
                    </p>
                    {order.isPaid ? <Message variant='success'> Paid on {order.paidAt}</Message>:<Message variant='danger'>Not Paid</Message>}
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Order Items</h5>
                    {order.orderItems.length===0 ? <Message>Your order is empty !!</Message> : (
                        <ListGroup variant='flush'>
                         {order.orderItems.map((item , index)=>(
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
                            Rs.{order.itemsPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Shipping
                            </Col>
                            <Col>
                            Rs.{order.shippingPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Tax
                            </Col>
                            <Col>
                            Rs.{order.taxPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Total
                            </Col>
                            <Col>
                            Rs.{order.totalPrice}
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  </>
};

export default OrderScreen;
