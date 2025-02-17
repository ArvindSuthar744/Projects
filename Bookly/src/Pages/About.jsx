import React from 'react'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>

      <div>
       <Header Headername={"About"}/>
        <section id="company-services" className="padding-large">
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
        <section id="about-us" className="padding-large pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="image-holder position-relative mb-4 d-flex align-items-center justify-content-center">
                  <div className="image">
                    <img src="images/single-image-about.jpg" alt="single" className="img-fluid rounded-3 single-image" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail ps-md-5 mt-5">
                  <div className="display-header">
                    <h3 className="mb-3">Best Bookstore of all time</h3>
                    <p className="pb-1">Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra eros at.
                    </p><p>Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et. </p>
                    <Link to='/shop'className="btn mt-3">Go to shop</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default About
