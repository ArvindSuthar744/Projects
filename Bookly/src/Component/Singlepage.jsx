import React, { useContext, useState } from 'react'
import { products } from '../Context-Api/Products'
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import { Cartproducts } from '../App';

function Singlepage() {

    let [quantity,setQuantity] = useState(1);
    const { postId } = useParams();
    const productShow = products.find((v) => v.id == postId)
    const {cart,setCart} = useContext(Cartproducts)
    console.log(cart)

    const handleInc = () => {
        setQuantity((q)=> q + 1)
    }
    const handleDec = () => {
        setQuantity((q)=> (q > 1 ? q - 1 : 1))
    }
    
    // const cartidhandeler = (id) => {
    //     console.log("shopproductsID:",id)
    //     const product = products.find((p)=>p.id == id);
    //     console.log(product)
    //     const existingProduct = cart.find(item => item.id === product.id);
    //     console.log("existingProduct",existingProduct)
    //     console.log(cart)
    //     if(existingProduct){
    //         setCart(
    //             cart.map((item) => item.id === product.id ? {...item,quantity : item.quantity + quantity } : item )
    //         )    
    //         console.log('if')
    //     }
    //     else{
    //         setCart([...cart,{product, quantity: quantity }])
    //         console.log("else")
    //     }
    // }

    const cartidhandeler = (id) => {
        console.log("shopproductsID:", id);
        const product = products.find((p) => p.id == id);
        console.log("Product:", product);

        const existingProduct = cart.find((item) => item.id === product.id);
        console.log("existingProduct:", existingProduct);
        console.log("Current Cart:", cart);
    
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
            console.log("Product updated in cart.");
        } else {
            setCart([...cart, { ...product, quantity }]);
            console.log("Product added to cart.");
        }
    };
    
    

    return (
        <div>
            <div>
                <Header Headername={'Singlepage'} />
                <Link to='/shop' className='btn mx-5'>Go Back</Link>
                <section className="single-product padding-large">
                    <div className="container">
                            <div className="row" key={productShow.id}>
                                <div className="col-lg-6">
                                    <div className="d-flex gap-3 product-preview">
                                        <div className="swiper large-swiper border rounded-3 overflow-hidden">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide bg-white">
                                                    <img src={productShow.bookImg} alt="single-product" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="product-info ps-lg-5 pt-3 pt-lg-0">
                                        <div className="element-header">
                                            <h1 className="product-title">{productShow.bookName}</h1>
                                            <div className="product-price d-flex align-items-center mt-2">
                                                <span className="fs-2 fw-light text-primary me-2">$200</span>
                                                <del>{productShow.bookPrice}</del>
                                            </div>
                                            <div className="rating text-warning d-flex align-items-center mb-2">
                                                <svg className="star star-fill">
                                                    <use xlinkHref="#star-fill" />
                                                </svg>
                                                <svg className="star star-fill">
                                                    <use xlinkHref="#star-fill" />
                                                </svg>
                                                <svg className="star star-fill">
                                                    <use xlinkHref="#star-fill" />
                                                </svg>
                                                <svg className="star star-fill">
                                                    <use xlinkHref="#star-fill" />
                                                </svg>
                                                <svg className="star star-fill">
                                                    <use xlinkHref="#star-fill" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                        <hr />
                                        <div className="cart-wrap">
                                            <div className="product-quantity my-3">
                                                <div className="item-title">
                                                    <p>2 in stock</p>
                                                </div>
                                                <div className="stock-button-wrap mt-2 d-flex flex-wrap align-items-center">
                                                    <div className="product-quantity">
                                                        <div className="input-group product-qty align-items-center" style={{ maxWidth: 150 }}>
                                                            <span className="input-group-btn">
                                                                <button type="button" onClick={handleDec} className="bg-white shadow border rounded-3 fw-light quantity-left-minus" data-type="minus" data-field>
                                                                <i className="fa-solid fa-minus"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" id="quantity" name="quantity" className="form-control bg-white shadow border rounded-3 py-2 mx-2 input-number text-center" value={quantity.toString()} readOnly min={1} max={100}  />
                                                            <span className="input-group-btn">
                                                                <button type="button" onClick={handleInc} className="bg-white shadow border rounded-3 fw-light quantity-right-plus" data-type="plus" data-field>
                                                                <i className="fa-solid fa-plus"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="action-buttons my-3 d-flex flex-wrap gap-3">
                                                <button className="btn btn-dark"
                                                  onClick={() => {
                                                    cartidhandeler(productShow.id)
                                                }}
                                                >Add to cart</button>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="meta-product my-3">
                                            <div className="meta-item d-flex mb-1">
                                                <span className="fw-medium me-2">SKU:</span>
                                                <ul className="select-list list-unstyled d-flex mb-0">
                                                    <li data-value="S" className="select-item">1223</li>
                                                </ul>
                                            </div>
                                            <div className="meta-item d-flex mb-1">
                                                <span className="fw-medium me-2">Category:</span>
                                                <ul className="select-list list-unstyled d-flex mb-0">
                                                    <li data-value="S" className="select-item">
                                                        <a href="#">Romance</a>,
                                                    </li>
                                                    <li data-value="S" className="select-item">
                                                        <a href="#">Sci-Fi</a>,
                                                    </li>
                                                    <li data-value="S" className="select-item">
                                                        <a href="#">Fiction</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="meta-item d-flex mb-1">
                                                <span className="fw-medium me-2">Tags:</span>
                                                <ul className="select-list list-unstyled d-flex mb-0">
                                                    <li data-value="S" className="select-item">
                                                        <a href="#">Revenge</a>,
                                                    </li>
                                                    <li data-value="S" className="select-item">
                                                        <a href="#">Vampire</a>,
                                                    </li>
                                                    <li data-value="S" className="select-item">
                                                        <a href="#">Life</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                <section className="product-tabs">
                    <div className="container">
                        <div className="row">
                            <div className="tabs-listing">
                                <div className="tab-content border-bottom py-4" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <p>Product Description</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                             Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
                                        </p><ul className="fw-light">
                                            <li>Donec nec justo eget felis facilisis fermentum.</li>
                                            <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                                            <li>Aliquam porttitor mauris sit amet orci.</li>
                                        </ul>
                                        <div className="tab-pane" id="nav-shipping">
                                        <p>Returns Policy</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
                                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
                                        <p>Shipping</p>
                                        <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus. Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </div>
    )
}

export default Singlepage
