import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Container, Form } from 'react-bootstrap';
import Rating from "../components/Rating";
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, createProductReview } from '../actions/productAction';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';

const ProductScreen = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;


  const productReviewCreate = useSelector(state => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } = productReviewCreate

  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    if (successProductReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(id))
  }, [dispatch, successProductReview, id])
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    )
  }
  return (
    <>
      <main className="py-3">
        <Container>
          <Link className='btn btn-light  my-3' to="/">
            Go Back
          </Link>
          {loading ? <Loader />
            : error ? <Message variant="danger">{error}</Message>
              : (
                <>
                  <Row>
                    <Col md={6}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={product.image} alt={product.name} fluid
                        style={{ maxHeight: "500px" }} />
                    </Col>
                    <Col md={3}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h5>{product.name}</h5>
                        </ListGroup.Item>
                        <div style={{marginTop:"10px", marginBottom:"10px"}}>
                          <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                          />
                        </div>

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
                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Stock'}</strong>
                              </Col>
                            </Row>

                          </ListGroup.Item>

                          {product.countInStock > 0 && (
                            <ListGroup.Item>
                              <Row>
                                <Col>Qty</Col>
                                <Col>
                                  <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {
                                      [...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                      )
                                      )
                                    }
                                  </Form.Control>
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          )}
                          <ListGroup.Item>
                            <Button
                              onClick={addToCartHandler}
                              className="btn btn-block"
                              type="button"
                              disabled={product.countInStock === 0}>
                              Add to Cart
                            </Button>
                          </ListGroup.Item>

                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} style={{ marginTop: "15px" }}>
                      <h5>Reviews</h5>
                      {product.reviews.length === 0 && <Message>No Reviews</Message>}
                      <ListGroup variant='flush'>
                        {product.reviews.map(review => (
                          <ListGroup.Item key={review._id}>
                            <strong>{review.name}</strong>
                            <Rating value={review.rating} />
                            <p>{review.comment}</p>
                          </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                          <h5>Add a review</h5>
                          {errorProductReview && (
                            <Message variant='danger'>{errorProductReview}</Message>
                          )}
                          {userInfo ? (
                            <Form onSubmit={submitHandler}>
                              <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                  as='select'
                                  value={rating}
                                  onChange={(e) => setRating(e.target.value)}
                                >
                                  <option value=''>Select...</option>
                                  <option value='1'>1 - Poor</option>
                                  <option value='2'>2 - Fair</option>
                                  <option value='3'>3 - Good</option>
                                  <option value='4'>4 - Very Good</option>
                                  <option value='5'>5 - Excellent</option>
                                </Form.Control>
                              </Form.Group>
                              <Form.Group controlId='comment'>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                  as='textarea'
                                  row='3'
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                ></Form.Control>
                              </Form.Group>
                              <Button type='submit' variant='primary' style={{marginTop:"15px"}}>
                                Submit
                              </Button>

                            </Form>
                          ) :
                            <Message> Please <Link to='/login'>sign in</Link> to write a review{' '}</Message>}
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </>
              )}

        </Container>
      </main>
    </>
  )
}

export default ProductScreen
