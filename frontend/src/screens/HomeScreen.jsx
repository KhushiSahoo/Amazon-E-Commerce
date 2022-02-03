import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel'
import '../index.css';
import{Row , Col , Container} from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {useDispatch , useSelector} from 'react-redux';
import { listProducts } from '../actions/productAction';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import { useState } from 'react';
const HomeScreen = () => {
      const dispatch = useDispatch();
      let {keyword}  = useParams();
      
    useEffect(()=>{
        dispatch(listProducts(keyword))
    } , [dispatch , keyword])

    const [pageNumber , setPageNumber ]= useState(0);
      const productPerPage =4;
      const productList = useSelector(state => state.productList)
      const {loading , error , products} = productList;
      const pageVisited = pageNumber * productPerPage;
      const pageCount = Math.ceil(products.length / productPerPage)
      const changePage=({selected})=>{
      setPageNumber(selected);
      window.scrollTo(0 , 150);
    }
    return (
        <>  
        {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
        <main className="py-3">
        <Container>
        <h4>Latest Product</h4>
        {loading ?
         <Loader/>
         : error? <Message variant="danger">{error}</Message>
         : <Row>
                {products.slice(pageVisited , pageVisited+productPerPage).map(product=>{
                    return(<Col key={product._id} sm={12} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>)
                })}
            </Row>}
            <center>
                <div className='m-4'>
            <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttns'}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
             activeClassName={'activeBttn'}
             />
             </div>
           </center>
        </Container>
        </main>
        </>
    )
}

export default HomeScreen
