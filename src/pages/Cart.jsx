import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  return (
    <>
      <button style={{ marginTop: '150px' }} className='btn btn-light ms-5'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back To Home </Link>
      </button>
      <div className='row w-100'>
        {
          cartItems.length > 0 ?
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
                  }
                </tbody>
              </table>
            </div> :
            <p className='text-danger'>No items in cart</p>

        }
      </div>

    </>
  )
}

export default Cart