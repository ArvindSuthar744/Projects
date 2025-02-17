import React from 'react'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'
import { blogscontent } from '../Context-Api/Blogscontent'

function Blogs() {


  return (
    <div>

      <div>
          <Header Headername={"Blogs"}/>
        <div id="blog" className="padding-large">
          <div className="container">
            <div className="row flex-row-reverse justify-content-center g-md-5">
              <main className="col-md-9 mb-4 mb-md-0">
                {/* <div className="filter-blog d-flex flex-wrap justify-content-between mb-4">
                  <div className="showing-product">
                    <p>Showing 1-9 of 55 results</p>
                  </div>
                  <div className="sort-by">
                    <select id="sorting" className="form-select" data-filter-sort data-filter-order>
                      <option value>Latest to oldest</option>
                      <option value>Oldest to latest</option>
                      <option value>Popular</option>
                      <option value>Name (A - Z)</option>
                      <option value>Name (Z - A)</option>
                      <option value>Model (A - Z)</option>
                      <option value>Model (Z - A)</option>
                    </select>
                  </div>
                </div> */}
                <div className="row post-contents">
                {blogscontent.map((blogs)=>(
                    <div className="col-lg-4 col-md-6 posts mb-5" key={blogs.id}>
                    <img src={blogs.blogImg} alt="post image" className="img-fluid rounded-3" />
                    <Link to='/shop' className="fs-6 text-primary">Books</Link>
                    <h4 className="card-title mb-2 text-capitalize text-dark">
                      The Fascinating Realm of Science Fiction
                      </h4>
                    <p className="mb-2">
                      {blogs.blogPara} 
                      <span>
                        <a className="text-decoration-underline text-black-50">
                          Read More</a>
                      </span>
                    </p>
                  </div>
                ))}
                </div>
              </main>
             
            </div>
          </div>
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


    </div>
  )
}

export default Blogs
