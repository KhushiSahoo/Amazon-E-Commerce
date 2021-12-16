import React from 'react'
import products from '../products';
import{Row , Col} from 'react-bootstrap';
import Product from '../components/Product';
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Product</h1>
            <Row>
                {products.map(product=>{
                    return(<Col sm={12} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>)
                })}
            </Row>
        </>
    )
}

export default HomeScreen
