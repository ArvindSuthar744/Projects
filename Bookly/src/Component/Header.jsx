import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({Headername}) {
  return (
    <div>

          <section className="hero-section position-relative padding-large" style={{ backgroundImage: 'url(images/banner-image-bg-1.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <h2>{Headername}</h2>
                  <div className="breadcrumbs">
                    <span className="item">
                    <NavLink to='/'>Home &gt;</NavLink>
                    </span>
                    <span className="item text-decoration-underline">{Headername}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Header
