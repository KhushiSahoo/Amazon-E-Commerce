import React from 'react'
import { Card } from 'react-bootstrap'
import  Rating from './Rating';
import {Link} from 'react-router-dom'
const Product = ({product}) => {
    return (
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{ objectFit: "contain", height: "200px" }}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <h6 style={{ height: "30px", overflow: "hidden" }}>
                {product.name}
              </h6>
              <p style={{ color: "white" }}>{product.brand}</p>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text>
            <h6 style={{fontSize:"20px"}}>
              Rs.{product.price}{" "}
              <span style={{ textDecoration: "line-through" , marginLeft:"10px" }}>
                Rs.{product?.amazonPrice}
              </span>
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Product;
