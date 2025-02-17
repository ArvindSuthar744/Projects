import React, { useContext } from 'react'
import Header from '../Component/Header'
import { Cartproducts } from '../App'
import { Link } from 'react-router-dom';

function Cart() {

    const {cart,setCart} =  useContext(Cartproducts);
    
    console.log(cart);
    const handlerAllRemove = () => {
        setCart([]);
    }
    // const handlertotal = () => {
    //     const price = cart.bookPrice || 0 ;
    //     const quantity = cart.quantity || 1 ;
    //     console.log(typeof(cart.bookPrice))

    //     console.log(price,quantity)
    //     return(price * quantity)
    // }
    const handlertotal = (pro) => {
        if (!cart || cart.length === 0) return 0;
        return cart.reduce((total, item) => total + item.bookPrice * item.quantity, 0);
        // const price = pro.bookPrice || 0;
        // const quantity = pro.quantity || 1;
        // return (price * quantity).toFixed(2); 
        // console.log(pro)
    };
    // const Total = cart.reduce((acc, item) => {
    //     const itemPrice = item.price || 0;
    //     return acc + itemPrice * (item.quantity || 1);
    //   }, 0);
    



    return (
        <div>

            <div>
                <Header Headername={"Cart"}/>
                <section className="cart padding-large">
                    <div className="container">
                        <div className="row">
                            <div className="cart-table" >
                            {cart.map((pro)=>(
                                    <div className="cart-item border-bottom padding-small" key={pro.id} >
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-3">
                                            <div className="cart-info d-flex gap-2 flex-wrap align-items-center">
                                                <div className="col-lg-5">
                                                    <div className="card-image">
                                                        <img src={pro.bookImg} alt="cart-img" className="img-fluid border rounded-3" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="card-detail">
                                                        <h5 className="mt-2">{pro.bookName}</h5>
                                                        <div className="card-price">
                                                            <span className="price text-primary fw-light" data-currency-usd="$2000.00">${pro.bookPrice}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7">
                                            <div className="row d-flex">
                                                <div className="col-md-6">
                                                    <div className="product-quantity my-2 my-2">
                                                        <div className="input-group product-qty align-items-center" style={{ maxWidth: 150 }}>
                                                            <span className="input-group-btn">
                                                                <button type="button" className="bg-white shadow border rounded-3 fw-light quantity-left-minus"
                                                                 data-type="minus" data-field
                                                                 onClick={()=>{
                                                                    if (pro.quantity > 1) {
                                                                        setCart(
                                                                          cart.map((item) =>
                                                                            item.id === pro.id
                                                                              ? { ...item, quantity: item.quantity - 1 }
                                                                              : item
                                                                          )
                                                                        );
                                                                      }
                                                                 }}>
                                                                <i className="fa-solid fa-minus"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" id="quantity" name="quantity" 
                                                            className="form-control bg-white shadow border rounded-3 py-2 mx-2 input-number text-center"
                                                             value={pro.quantity} readOnly min={1} max={100} required />
                                                            <span className="input-group-btn">
                                                                <button type="button" className="bg-white shadow border rounded-3 fw-light quantity-right-plus"
                                                                 data-type="plus" data-field
                                                                 onClick={()=>{
                                                                        setCart(
                                                                          cart.map((item) =>
                                                                            item.id === pro.id
                                                                              ? { ...item, quantity: item.quantity + 1 }
                                                                              : item
                                                                          )
                                                                        );
                                                                 }}>
                                                                <i className="fa-solid fa-plus"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="total-price">
                                                        <span className="money fs-2 fw-light text-primary">${pro.bookPrice * pro.quantity}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-2">
                                            <div className="cart-cross-outline">
                                                <i className="fa-solid fa-xmark icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="cart-totals padding-medium pb-0">
                                <h3 className="mb-3">Cart Totals</h3>
                                <div className="total-price pb-3">
                                    <table cellSpacing={0} className="table text-capitalize">
                                        <tbody>
                                            <tr className="order-total pt-2 pb-2 border-bottom">
                                                <th>Total</th>
                                                <td data-title="Total">
                                                    <span className="price-amount amount text-primary ps-5 fw-light">
                                                        <span className="price-currency-symbol">${handlertotal()}</span>
                                                    </span>
                                                </td>
                                            </tr>   
                                        </tbody>
                                    </table>
                                </div>
                                <div className="button-wrap d-flex flex-wrap gap-3">
                                    <button className="btn" onClick={handlerAllRemove}>All Remove</button>
                                    <button className="btn">Continue Shopping</button>
                                    <Link to='/checkout' className="btn">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
            <section id="instagram">
                <div className="container">
                    <div className="text-center mb-4">
                        <h3>Instagram</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <figure className="instagram-item position-relative rounded-3">
                  
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                    <img src="images/insta-item1.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                           
                            </figure>
                        </div>
                        <div className="col-md-2">
                            <figure className="instagram-item position-relative rounded-3">
                    
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                    <img src="images/insta-item2.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
           
                            </figure>
                        </div>
                        <div className="col-md-2">
                            <figure className="instagram-item position-relative rounded-3">
                       
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                    <img src="images/insta-item3.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
           
                            </figure>
                        </div>
                        <div className="col-md-2">
                            <figure className="instagram-item position-relative rounded-3">
             
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                    <img src="images/insta-item4.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                  
                            </figure>
                        </div>
                        <div className="col-md-2">
                            <figure className="instagram-item position-relative rounded-3">
      
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                    <img src="images/insta-item5.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
               
                            </figure>
                        </div>
                        <div className="col-md-2">
                            <figure className="instagram-item position-relative rounded-3">
              
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                    <img src="images/insta-item6.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                          
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            </div>



        </div>
    )
}

export default Cart
