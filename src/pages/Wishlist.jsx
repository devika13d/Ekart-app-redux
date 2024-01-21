import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistReducer);
  // console.log('111', wishlistItems);
  const dispatch = useDispatch()
  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <>
      <button style={{ marginTop: '150px' }} className='btn btn-light ms-5'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back To Home </Link>
      </button>
      <Row className='ms-5 me-5 mt-5'>
        {
          wishlistItems?.length > 0 ?
            wishlistItems.map((item) => (
              <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button onClick={() => dispatch(removeFromWishlist(item.id))}
                        variant="outline-danger" ><i class="fa-solid fa-trash"></i></Button>
                      <Button onClick={() => handleWishlist(item)}
                        variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>

                    </div>

                  </Card.Body>
                </Card>
              </Col>
            )) :
            <p className='text-danger'>No items in wishlist</p>
        }
      </Row>
    </>
  )
}

export default Wishlist