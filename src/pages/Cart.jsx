import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const [total, setTotal] = useState(0)
  const cartItems = useSelector((state) => state.cartReducer);
  // console.log('cart items',cartItems);
  let totalPrice = 0;
  cartItems?.forEach(item => {
    totalPrice = totalPrice + item.price;
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCheckout = () => {
    alert('Successfully placed the order!!');
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
      <button style={{ marginTop: '150px' }} className='btn btn-light ms-5'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <i className="fa-solid fa-arrow-left me-2"></i>Back To Home </Link>
      </button>
      <div className='row w-100'>
        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.length > 0 ?
                  cartItems?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} alt="" height={'50px'} /></td>
                      <td>&#8377;{item.price}</td>
                      <td>
                        <Button onClick={() => dispatch(removeFromCart(item.id))}
                          variant="outline-danger" ><i class="fa-solid fa-trash"></i></Button></td>
                    </tr>
                  ))
                  :
                  <p className='text-danger'>No items in cart</p>
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className='col-lg-4 col-md-4 d-flex justify-content-center align-items-center'>
        <div className='border shadow p-5 ' id='cart'>
          <h3 className='text-primary'>Cart Summary</h3>
          <h5>Total Number of Products: <span className='fw-bolder fs-4 text-warning ms-3'>
            {cartItems?.length}</span></h5>
          <h5>Total Price: <span className='fw-bolder text-warning ms-3'>
            {totalPrice}</span></h5>
          <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>


    </>
  )
}

export default Cart