import React , {useEffect} from 'react';
import{Row , Col , Container} from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {useDispatch , useSelector} from 'react-redux';
import { listProducts } from '../actions/productAction';
const HomeScreen = () => {
      const dispatch = useDispatch();
      const productList = useSelector(state => state.productList)
      const {loading , error , products} = productList
    useEffect(()=>{
        dispatch(listProducts())
    } , [dispatch])
    
    return (
        <>  
        <main className="py-3">
        <Container>
        <h4>Latest Product</h4>
        {loading ?
         <Loader/>
         : error? <Message variant="danger">{error}</Message>
         : <Row>
                {products.map(product=>{
                    return(<Col key={product._id} sm={12} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>)
                })}
            </Row>}
           
        </Container>
        </main>
        </>
    )
}

export default HomeScreen
