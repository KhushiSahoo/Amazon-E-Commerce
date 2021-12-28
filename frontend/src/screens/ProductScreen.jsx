import React , {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row , Col , Image , ListGroup , Card , Button, ListGroupItem, Container} from 'react-bootstrap';
import Rating from "../components/Rating";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ProductScreen = () => {
    const [product , setProduct]= useState({});
    const id = useParams();
    console.log(id.id);
    useEffect(()=>{
        const fetchProduct = async()=>{
        const {data}=  await axios.get(`/api/products/${id.id}`)
        setProduct(data)
        }
        fetchProduct()
    } , [])
    
    return (
        <>
        <main classname="py-3">
        <Container>
        <Link className='btn btn-light  my-3' to="/">
            Go Back
        </Link>
        <Row>
            <Col md={6}>
             <Image src={product.image} alt= {product.name} fluid/>
            </Col>
            <Col md={3}>
             <ListGroup variant="flush">
                 <ListGroup.Item>
                  <h3>{product.name}</h3>   
                 </ListGroup.Item>
                <Rating 
                value={product.rating} 
                text={`${product.numReviews} reviews`} 
                />
                <ListGroup.Item>
                   Price: Rs{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                   Description: {product.description}
                </ListGroup.Item>
             </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                     <Row>
                         <Col>
                          Price:
                         </Col>
                         <Col>
                          <strong>Rs{product.price}</strong>
                         </Col>
                     </Row>

                    </ListGroup.Item>
                    <ListGroup.Item>
                     <Row>
                         <Col>
                          Status:
                         </Col>
                         <Col>
                          <strong>{product.countInStock>0 ? 'In Stock' : 'Out Stock'}</strong>
                         </Col>
                     </Row>

                    </ListGroup.Item>        
                     <ListGroup.Item>
                         <Button 
                         className="btn btn-block" 
                         type="button" 
                         disabled={product.countInStock===0}>
                             Add to Cart
                         </Button>
                     </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </Container>
        </main>
        </>
    )
}

export default ProductScreen
