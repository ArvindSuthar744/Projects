import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Cartproducts, Userlogin } from '../App';

function Navbar() {

  const nav = useNavigate();
  const {loginbtn,setLoginbtn,UserName,setUserName} = useContext(Userlogin);
  const {cart} =  useContext(Cartproducts);
  
  // console.log(loginbtn)

  const logouthandler = () =>{
    setLoginbtn(false)
    setUserName('')
    nav('/')

  }

  return (
    <div>



      <header id="header" className="site-header">
        <nav id="header-nav" className="navbar navbar-expand-lg py-3">
          <div className="container">
           
              <img src="../images/main-logo.png" className="logo" />
        
            <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <svg className="navbar-icon">
                <use xlinkHref="#navbar-icon" />
              </svg>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div className="offcanvas-header px-4 pb-0">
                  <img src="images/main-logo.png" className="logo" />
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
              </div>
              <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1">
                  <li className="nav-item">
                    <NavLink to='/' className="nav-link me-4 active" >Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/shop' className="nav-link me-4" >Shop</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/blogs' className="nav-link me-4" >Blogs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/about' className="nav-link me-4" >About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/contact' className="nav-link me-4" >Contact</NavLink>
                  </li>
                </ul>
                <div className="user-items d-flex">
                  <ul className="d-flex justify-content-end list-unstyled mb-0">
                    <li className="p-3">
                      <div className="btns-btn">
                      {loginbtn ? 
                      <> 
                      <button className="btn btn-primary"
                      onClick={logouthandler}
                      >Logout</button>
                      </>
                      :
                      <>
                      <NavLink to='/login' className="btn btn-primary">Login</NavLink>
                      <NavLink to='/register' className="btn btn-primary">Register</NavLink>
                      </>
                    }
                      </div>
                    </li>
                    <li className="cart-dropdown dropdown cart-btn">
                      <NavLink to='/cart'>
                        <svg className="cart">
                          <use xlinkHref="#cart" />
                        </svg><span className="fs-6 fw-light">
                        {cart.length}
                        </span>
                      </NavLink>
                    </li>
                    <li className='welcomename'>
                      {loginbtn ? <><span>Welcome</span> {UserName}</> : <> </> }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="username">
          <h4>{}</h4>
        </div>
      </header>



    </div>
  )
}

export default Navbar
