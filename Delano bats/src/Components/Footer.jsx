import React from 'react'

function Footer() {
  return (
    <>
      <section className='flex flex-col items-center justify-center bg-black text-white'>
        <div className='w-full px-7 pt-10 pb-20 flex flex-wrap items-center justify-between max-lg:justify-center gap-10 max-md:flex-col  border-b-[1px] border-gray-600'>
          <ul className='flex flex-col gap-2 font-extrabold max-md:items-center'>
            <li>Shop</li>
            <li>FZN Technology</li>
            <li>About</li>
            <li>Blog</li>
            <li>Delano Assurance Warranty</li>
            <li>Privacy and Terms</li>
          </ul>
          <div className='text-center max-lg:pb-20'>
            <img src="../assets/signeture.webp" className='w-[310px]' alt="" />
          </div>
          <div className='flex flex-col text-end gap-2 font-extrabold max-md:items-center'>
            <div className='flex gap-3 justify-end'>
            <i className="fa-brands fa-facebook-f text-xl"></i>
            <i className="fa-brands fa-instagram text-xl"></i>
            <i className="fa-solid fa-x text-xl"></i>
            </div>
            <p className='max-md:text-center'>Delano Bat Company, LLC<br/>4435 Farmington Ave SE<br/>Delano, MN 55328</p>
            <a href="#" className='flex items-center gap-2'>
              <i className="fa-solid fa-envelope"></i> 
              sales@delanobats.com
            </a>
          </div>
        </div>
        <div className='w-full px-7 py-5 flex items-center justify-between max-lg:flex-col-reverse gap-3'>
          <p className='text-sm'>© 2025 Delano Bat Company, LLC | All Rights Reserved. Powered By CWS.</p>
          <img src="../assets/Payment-icon.png" className='h-[25px]' alt="" />
        </div>
      </section>
    </>
  )
}

export default Footer
