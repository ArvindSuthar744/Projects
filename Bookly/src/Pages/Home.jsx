import React, { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { bestSeller } from '../Context-Api/BestSeller'
import { Cartproducts } from '../App'


function Home() {

    const {cart,setCart} = useContext(Cartproducts)


    const cartidhandeler = (id) => {
        console.log("bestsellerprtodouctID:",id)
        const product = bestSeller.find((p)=>p.id == id);
        setCart([...cart,product])
        console.log(cart);
    }

    return (
        <div>

            <section id="billboard" className="position-relative d-flex align-items-center py-5 bg-light-gray" style={{ backgroundImage: 'url(images/banner-image-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: 800 }}>
                {/* <div className="position-absolute end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next main-slider-button-next">
                    <svg className="chevron-forward-circle d-flex justify-content-center align-items-center p-2" width={80} height={80}>
                        <use xlinkHref="#alt-arrow-right-outline" />
                    </svg>
                </div>
                <div className="position-absolute start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev main-slider-button-prev">
                    <svg className="chevron-back-circle d-flex justify-content-center align-items-center p-2" width={80} height={80}>
                        <use xlinkHref="#alt-arrow-left-outline" />
                    </svg>
                </div> */}
                <div className="swiper main-swiper">
                    <div className="swiper-wrapper d-flex align-items-center">
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                                    <div className="col-md-5 offset-md-1  mt-md-0 text-center text-md-start">
                                        <div className="banner-content">
                                            <h2>The Fine Print Book Collection</h2>
                                            <p>Best Offer Save 30%. Grab it now!</p>
                                            <NavLink to='/shop' className="btn mt-3" >Shop Collection</NavLink>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <div className="image-holder">
                                            <img src="images/banner-image2.png" className="img-fluid" alt="banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="company-services" className="padding-large pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="cart-outline">
                                        <use xlinkHref="#cart-outline" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title mb-1 text-capitalize text-dark">Free delivery</h4>
                                    <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="quality">
                                        <use xlinkHref="#quality" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title mb-1 text-capitalize text-dark">Quality guarantee</h4>
                                    <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="price-tag">
                                        <use xlinkHref="#price-tag" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title mb-1 text-capitalize text-dark">Daily offers</h4>
                                    <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="shield-plus">
                                        <use xlinkHref="#shield-plus" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title mb-1 text-capitalize text-dark">100% secure payment</h4>
                                    <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div>
                <section id="best-selling-items" className="position-relative p-2 ">
                    <div className="container">
                        <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
                            <h3 className="d-flex align-items-center">Best selling items</h3>
                            <Link to='/shop' className='btn'>View All</Link>
                        </div>
                        <div className="container-fluid">
                            <div className="row gap-2">

                                {bestSeller.map((bestSellerProducts) => (

                                    <div className="card position-relative p-4 border rounded-3 col-sm-4 col-md col-lg col-xl" key={bestSellerProducts.id}>
                                        <div className="position-absolute">
                                            <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">10% off</p>
                                        </div>
                                        <Link to={`/singlepage/${bestSellerProducts.id}`}>
                                        <img src={bestSellerProducts.bookImg} className="img-fluid shadow-sm" alt="product item" />
                                        <h6 className="mt-4 mb-0 fw-bold">{bestSellerProducts.bookName}</h6>
                                        <div className="review-content d-flex">
                                            <p className="my-2 me-2 fs-6 text-black-50">{bestSellerProducts.bookAuthor}</p>
                                            <div className="rating text-warning d-flex align-items-center">
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
                                        <span className="price text-primary fw-bold mb-2 fs-5">{bestSellerProducts.bookPrice}</span>
                                        </Link>
                                        <button type="button" href="#" className="btn " data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-title="Tooltip on top"
                                            onClick={() => {
                                                cartidhandeler(bestSellerProducts.id)
                                            }}>
                                            ADD to Cart
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </div>

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
    )
}

export default Home
