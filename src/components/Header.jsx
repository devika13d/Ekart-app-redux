import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  //to access data inside store:useSelector
  const WishlistArray = useSelector((state) => state.wishlistReducer);
  const cartList = useSelector((state => state.cartReducer));
  // console.log('wishlist array for header', WishlistArray);
  return (
    <>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{ zIndex: '1' }}>
        <Container>
          <Navbar.Brand href="/">
            <img height={'30px'} className='me-3' src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt="" />
            E KART
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn border rounded me-3' > <Link to={'/wishlist'} style={{ color: 'white', textDecoration: 'none' }}>
                Wishlist  <Badge bg="secondary">{WishlistArray.length}</Badge></Link>
              </Nav.Link>


              <Nav.Link className='btn border rounded' style={{ width: "100px", color: 'white' }}><Link to={'/cart'}
                style={{ color: 'white', textDecoration: 'none' }}>Cart  <Badge bg="secondary">{cartList.length}</Badge></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header