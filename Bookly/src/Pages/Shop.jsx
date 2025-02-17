import React, { useContext } from 'react'
import Header from '../Component/Header'
import { products } from '../Context-Api/Products'
import { Link} from 'react-router-dom'
import { Cartproducts } from '../App'

function Shop() {

    
    const {cart,setCart} = useContext(Cartproducts)

    // const cartidhandeler = (id) => {
    //    console.log("shopproductsID:",id)

    //    const pro = products.find((p)=>p.id == id);
    //        setcartpro([...cartpro,pro])
     

    //    console.log(cartpro);
    // }

    return (
        <div>

            <div>

                <Header Headername={"Shop"} />

                <div className="shopify-grid padding-large">
                    <div className="container">
                        <div className="row flex-row-reverse display-flex justify-content-center g-md-5">
                            <main className="col-md-9">
                                <div className="filter-shop justify-content-between mb-5">
                                    <div className="showing-product">
                                        <p>Showing 1–9 of 55 results</p>
                                    </div>
                                    {/* <div className="sort-by">
                                        <select id="sorting" className="form-select" data-filter-sort data-filter-order>
                                            <option value>Default sorting</option>
                                            <option value>Name (A - Z)</option>
                                            <option value>Name (Z - A)</option>
                                            <option value>Price (Low-High)</option>
                                            <option value>Price (High-Low)</option>
                                            <option value>Rating (Highest)</option>
                                            <option value>Rating (Lowest)</option>
                                            <option value>Model (A - Z)</option>
                                            <option value>Model (Z - A)</option>
                                        </select>
                                    </div> */}
                                </div>
                                <div className="row product-content product-store">

                                {products.map((products) => (
                                    <div className="col-lg-3 col-md-4 mb-4 " key={products.id}>
                                        <div className="card position-relative p-4 border rounded-3">
                                            <div className="position-absolute">
                                                <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">10% off</p>
                                            </div>
                                            <Link to={`/singlepage/${products.id}`}>
                                            <img src={products.bookImg} className="img-fluid shadow-sm" alt="product item" />
                                            <h6 className="mt-4 mb-0 fw-bold">{products.bookName}</h6>
                                            <div className="review-content d-flex flex-wrap">
                                                <p className="my-2 me-2 fs-6 text-black-50">{products.bookAuthor}</p>
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
                                            <span className="price text-primary fw-bold mb-2 fs-5">{products.bookPrice}</span>
                                            </Link>
                                            {/* <button type="button" href="#" className="btn "
                                             data-bs-toggle="tooltip" data-bs-placement="top"
                                              data-bs-title="Tooltip on top"
                                              onClick={() => {
                                                cartidhandeler(products.id)
                                            }}>
                                             ADD to Card
                                            </button> */}
                                        </div>
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
                                    <a href="https://templatesjungle.com/" className="image-link position-relative">
                                        <div className="icon-overlay position-absolute d-flex justify-content-center">
                                            <svg className="instagram">
                                                <use xlinkHref="#instagram" />
                                            </svg>
                                        </div>
                                        <img src="images/insta-item1.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                                    </a>
                                </figure>
                            </div>
                            <div className="col-md-2">
                                <figure className="instagram-item position-relative rounded-3">
                                    <a href="https://templatesjungle.com/" className="image-link position-relative">
                                        <div className="icon-overlay position-absolute d-flex justify-content-center">
                                            <svg className="instagram">
                                                <use xlinkHref="#instagram" />
                                            </svg>
                                        </div>
                                        <img src="images/insta-item2.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                                    </a>
                                </figure>
                            </div>
                            <div className="col-md-2">
                                <figure className="instagram-item position-relative rounded-3">
                                    <a href="https://templatesjungle.com/" className="image-link position-relative">
                                        <div className="icon-overlay position-absolute d-flex justify-content-center">
                                            <svg className="instagram">
                                                <use xlinkHref="#instagram" />
                                            </svg>
                                        </div>
                                        <img src="images/insta-item3.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                                    </a>
                                </figure>
                            </div>
                            <div className="col-md-2">
                                <figure className="instagram-item position-relative rounded-3">
                                    <a href="https://templatesjungle.com/" className="image-link position-relative">
                                        <div className="icon-overlay position-absolute d-flex justify-content-center">
                                            <svg className="instagram">
                                                <use xlinkHref="#instagram" />
                                            </svg>
                                        </div>
                                        <img src="images/insta-item4.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                                    </a>
                                </figure>
                            </div>
                            <div className="col-md-2">
                                <figure className="instagram-item position-relative rounded-3">
                                    <a href="https://templatesjungle.com/" className="image-link position-relative">
                                        <div className="icon-overlay position-absolute d-flex justify-content-center">
                                            <svg className="instagram">
                                                <use xlinkHref="#instagram" />
                                            </svg>
                                        </div>
                                        <img src="images/insta-item5.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                                    </a>
                                </figure>
                            </div>
                            <div className="col-md-2">
                                <figure className="instagram-item position-relative rounded-3">
                                    <a href="https://templatesjungle.com/" className="image-link position-relative">
                                        <div className="icon-overlay position-absolute d-flex justify-content-center">
                                            <svg className="instagram">
                                                <use xlinkHref="#instagram" />
                                            </svg>
                                        </div>
                                        <img src="images/insta-item6.jpg" alt="instagram" className="img-fluid rounded-3 insta-image" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Shop
