import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <Card classname="my-3 p-3 rounded">
           <a href ={`/product/${product._id}`} >
               <Card.Img src={product.image} variant='top'/>
           </a>
           <Card.Body>
               <a href={`/product/${product._id}`}>
                   <Card.Title as='div'>
                      <h6>{product.name}</h6>
                   </Card.Title>
               </a>
               <Card.Text as="div">
                   <div className='my-3'>
                       {product.rating} from {product.numReviews} reviews
                   </div>
               </Card.Text>
               <Card.Text as='h5'>
                  Rs.{product.price}
               </Card.Text>
           </Card.Body>
        </Card>
    )
}

export default Product;
