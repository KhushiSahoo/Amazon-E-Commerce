import React from 'react'
import products from '../products';
import{Row , Col , Container} from 'react-bootstrap';
import Product from '../components/Product';
const HomeScreen = () => {
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
