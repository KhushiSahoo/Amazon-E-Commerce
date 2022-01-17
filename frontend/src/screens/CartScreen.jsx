import React , {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import Message from '../components/Message';
import {Row , Col , ListGroup , Image ,  Form , Button , Card} from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';
import { useParams , useNavigate , useLocation   } from 'react-router-dom';

    

const CartScreen = () => {
    let { id } = useParams();
    let productId = id;
    let search = useLocation().search;
    let qty = Number(new URLSearchParams(search).get('qty'));
    console.log(qty);
    
    const dispatch = useDispatch();
    const cart = useSelector(state =>state.cart)
    const {cartItems}=cart;
    console.log(cartItems);
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId , qty))
        }
    }, [dispatch , productId , qty])
    return (
        <>
           <main>
           <h1>CART</h1>
           </main>
            
        </>
    )
}

export default CartScreen;
