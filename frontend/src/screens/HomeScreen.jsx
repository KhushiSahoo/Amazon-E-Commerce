import React , {useState , useEffect} from 'react';
import{Row , Col , Container} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
const HomeScreen = () => {
    const [products , setProducts]= useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
        const {data}=  await axios.get('/api/products')
        setProducts(data)
        }
        fetchProducts()
    } , [])
    
    return (
        <>  
        <main className="py-3">
        <Container>
        <h4>Latest Product</h4>
            <Row>
                {products.map(product=>{
                    return(<Col key={product._id} sm={12} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>)
                })}
            </Row>
        </Container>
        </main>
        </>
    )
}

export default HomeScreen
