import React from 'react'
import Header from '../Component/Header'

function Contact() {
  return (
    <div>

      <div>
        <Header Headername={"Contact"}/>
        <div className="contact-us padding-large">
          <div className="container">
            <div className="row">
              <div className="contact-info col-lg-6 pb-3">
                <h3>Contact info</h3>
                <p className="mb-5">Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                <div className="page-content d-flex flex-wrap">
                  <div className="col-lg-6 col-sm-12">
                    <div className="content-box text-dark pe-4 mb-5">
                      <h5 className="fw-bold">Office</h5>
                      <div className="contact-address pt-3">
                        <p>730 Glenstone Ave 65802, Springfield, US</p>
                      </div>
                      <div className="contact-number">
                        <p>
                          <a href="#">+123 987 321</a>
                        </p>
                        <p>
                          <a href="#">+123 123 654</a>
                        </p>
                      </div>
                      <div className="email-address">
                        <p>
                          <a href="#">info@yourinfo.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="content-box">
                      <h5 className="fw-bold">Management</h5>
                      <div className="contact-address pt-3">
                        <p>730 Glenstone Ave 65802, Springfield, US</p>
                      </div>
                      <div className="contact-number">
                        <p>
                          <a href="#">+123 987 321</a>
                        </p>
                        <p>
                          <a href="#">+123 123 654</a>
                        </p>
                      </div>
                      <div className="email-address">
                        <p>
                          <a href="#">info@yourinfo.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inquiry-item col-lg-6">
                <h3>Any questions?</h3>
                <p className="mb-5">Use the form below to get in touch with us.</p>
                <form id="form" className="d-flex gap-3 flex-wrap">
                  <div className="w-100 d-flex gap-3">
                    <div className="w-50">
                      <input type="text" name="name" placeholder="Write your name here *" className="form-control w-100" />
                    </div>
                    <div className="w-50">
                      <input type="text" name="email" placeholder="Write your email here *" className="form-control w-100" />
                    </div>
                  </div>
                  <div className="w-100">
                    <input type="text" name="phone" placeholder="Phone number" className="form-control w-100" />
                  </div>
                  <div className="w-100">
                    <textarea placeholder="Write your message here *" className="form-control w-100" defaultValue={""} />
                  </div>
                  <button type="submit" name="submit" className="btn my-3">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <section id="our-store" className="padding-large pt-0">
          <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
              <div className="col-lg-6">
                <div className="image-holder mb-5">
                  <img src="images/single-image2.jpg" alt="our-store" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="locations-wrap ms-lg-5">
                  <div className="display-header">
                    <h3>Our stores</h3>
                    <p className="mb-5">You can also directly buy products from our stores.</p>
                  </div>
                  <div className="location-content d-flex flex-wrap">
                    <div className="col-lg-6 col-sm-12">
                      <div className="content-box text-dark pe-4 mb-5">
                        <h5 className="fw-bold">USA</h5>
                        <div className="contact-address pt-3">
                          <p>730 Glenstone Ave 65802, US</p>
                        </div>
                        <div className="contact-number">
                          <p>
                            <a href="#">+123 666 777 88</a>
                          </p>
                        </div>
                        <div className="email-address">
                          <p>
                            <a href="#">info@yourinfo.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="content-box text-dark pe-4 mb-5">
                        <h5 className="fw-bold">Canada</h5>
                        <div className="contact-address pt-3">
                          <p>730 Glenstone Ave 65802, US</p>
                        </div>
                        <div className="contact-number">
                          <p>
                            <a href="#">+123 666 777 88</a>
                          </p>
                        </div>
                        <div className="email-address">
                          <p>
                            <a href="#">info@yourinfo.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Contact
