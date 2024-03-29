import React , {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import Message from '../components/Message';
import {Row , Col , ListGroup , Image ,  Form , Button , Card} from 'react-bootstrap';
import { addToCart , removeFromCart } from '../actions/cartActions';
import { useParams , useNavigate , useLocation   } from 'react-router-dom';

    

const CartScreen = () => {
    let { id } = useParams();
    let productId = id;
    let search = useLocation().search;
    let qty = Number(new URLSearchParams(search).get('qty'));
    console.log(qty);

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const cart = useSelector(state =>state.cart)
    const {cartItems}=cart;
    console.log(cartItems);
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId , qty))
        }
    }, [dispatch , productId , qty]);
    const removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id))
        console.log('remove')
    }
     const checkoutHandler=() =>{
         navigate('/shipping')
         console.log("checkout")
     }

    return (
        <>

            <Row style={{ minHeight: "70vh", margin: "10px" }}>
               <Col md={8}>
                <h4>Shopping Cart</h4>
                {cartItems.length===0 ? <Message>Your Cart is Empty :/  <Link to='/'>  Go Back</Link></Message> 
                :(
                    <ListGroup variant="flush">
                      {cartItems.map(item =>(
                          <ListGroup.Item key={item.product}>
                          <Row>
                              <Col md={2}>
                                  <Image src={item.image} alt={item.name} fluid rounded/>
                              </Col>
                              <Col md={3}>
                                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                              </Col>
                              <Col md={2}>
                                  Rs.{item.price}
                              </Col>
                              <Col md={2}>
                              <Form.Control as="select" value={item.qty} onChange={(e)=> dispatch(addToCart(item.product , Number(e.target.value)))}>
                                    {
                                    [...Array(item.countInStock).keys()].map((x)=> (
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    )
                                    )
                                    }
                                </Form.Control> 
                              </Col>
                              <Col md={2}>
                                  <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                      <i className='fas fa-trash'></i>
                                  </Button>
                              </Col>
                          </Row>
                          </ListGroup.Item>
                      ))}
                    </ListGroup>
                )}
               </Col>
               <Col md={4}>
                   <Card>
                       <ListGroup variant='flush'>
                           <ListGroup.Item>
                               <h4>Subtotal ({cartItems.reduce((acc,item)=> acc+ item.qty ,0)}) items</h4>
                               Rs. {cartItems.reduce((acc, item) => acc + item.qty * item.price , 0).toFixed(2)}
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Button type="button" className='btn-block' disabled={cartItems.length===0} 
                               onClick={checkoutHandler}>
                                   Proceed to Checkout
                               </Button>
                           </ListGroup.Item>
                       </ListGroup>
                   </Card>

               </Col>
        
           </Row>
            
        </>
    )
}

export default CartScreen;
