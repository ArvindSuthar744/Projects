import React, { useContext } from 'react'
import ReviewSlider from '../Components/reviewSlider'
import Navigation from '../Components/Navigation'
import { products } from '../Context-api/Products'
import { Link } from 'react-router-dom'
import InstaSlider from '../Components/InstaSlider'


function Homepage() {

  return (
    <>
      <header>
        <div className='w-[100%] h-[100vh] overflow-hidden bg-[url(https://cdn.buttercms.com/ABLMHkjbRliZPESFckI1)] bg-fixed bg-cover bg-center'>
        </div>
        <div className='w-full h-full absolute top-0 bg-black bg-opacity-50 left-0 z-20 text-white pt-5'>
          <Navigation />
          <img
            src="https://cdn.buttercms.com/xuxxklJUTf2h5QBifg90"
            className="absolute top-[38%] left-[35%] max-lg:left-[15%] max-md:left-[0%] "
            alt="logo"
          />
        </div>
      </header>

      <section className='bg-black p-14 py-20 pt-24 text-white flex flex-col justify-center items-center text-center max-md:p-7'>
        <div className='w-[90%] max-lg:w-[100%] pb-12'>
          <h2 className='pb-10 text-3xl font-bold text-[#D93E22] font-[robotofont]'>On Deck - Our Blog</h2>
          <p className='text-xl px-10 max-md:px-0'>Since then, Peter has become a bat-making craftsman. For almost 10 years, Peter turned
            the highest quality wood bats for thousands of competitive baseball players across the
            country, all from their Minnesota factory. More recently, Peter coupled his bat making
            expertise with his engineering know-how and partnered with a handful of other engineering
            experts & baseball lifers to change the direction of the company, and the future
            of baseball.</p>
        </div>
        <div className='flex items-center justify-center gap-5 max-lg:flex-wrap'>
          <div className='w-[33.33%] max-lg:w-[80%] max-md:w-[100%] h-[400px] max-lg:h-[100%] flex flex-col items-center gap-3 justify-center p-5 pb-10 bg-white text-black'>
            <img src="../assets/blog-img-1.png" alt="" />
            <h4 className='text-lg font-black text-[#D93E22]'>True wood look, feel and sound</h4>
            <p className='font-bold'>FZN is a true wood bat that gives hitters the unrivaled feel,
              classic sound and clean look of a traditional stick.
            </p>
          </div>
          <div className='w-[33.33%] max-lg:w-[80%] max-md:w-[100%] h-[400px] flex flex-col items-center gap-3 justify-center p-5 pb-10 bg-white text-black'>
            <img src="../assets/blog-img-1.png" alt="" />
            <h4 className='text-lg font-black text-[#D93E22]'>Maximum BBCOR specs and performance</h4>
            <p className='font-bold'>FZN delivers MAX trampoline effect allowed by BBCOR across a HUGE sweet spot of a 2 5/8' barrel
            </p>
          </div>
          <div className='w-[33.33%] max-lg:w-[80%] max-md:w-[100%] h-[400px] flex flex-col items-center gap-3 justify-center p-5 pb-10 bg-white text-black'>
            <img src="../assets/blog-img-1.png" alt="" />
            <h4 className='text-lg font-black text-[#D93E22]'>Completely Custom</h4>
            <p className='font-bold'>species of wood, 17+ models, 24 color options, 22 trademark colors, and personalization,
              give you the opportunity to create the ultimate gamer that is uniquely yours.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-[#D93E22] text-white p-14 max-md:p-7'>
        <div className='flex items-center justify-center gap-10 max-lg:flex-col'>
          <div className='flex-1'>
            <img src="../assets/magazine.webp" className='' alt="" />
          </div>
          <div className='flex flex-1 flex-col gap-5 items-center justify-center'>
            <h2 className='text-3xl font-extrabold'>Our Story</h2>
            <h6 className='text-xl font-extrabold'>Delano Bat Company</h6>
            <p className='text-center font-bold text-lg'>Delano is a small company with a big vision - to bring innovation to the great game of
              baseball while staying true to the unique roots, traditions and history of America's Pastime.
            </p>
            <button className='border border-white mt-5 py-3 px-9'>Read Our Story</button>
          </div>
        </div>
      </section>

      <section className='bg-black text-white py-16 px-7'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <h2 className='text-center text-3xl font-extrabold pb-16'>STOCK LUMBER</h2>
          </div>
          <div className='flex items-center justify-center gap-5 flex-wrap max-lg:gap-14'>
            {products.map((value, index) => (
              <div key={index} className='w-[23%] max-lg:min-w-[325px] max-md:w-full flex flex-col items-center gap-3 justify-center p-5 pb-10 bg-white text-black'>
                <Link to={`/Product/${value.id}`}>
                  <img src="../assets/Product-cart-img.webp" alt={value.name} />
                </Link>
                <h4 className='text-xl text-center font-extrabold'>{value.name}</h4>
                <p>$ {value.price}</p>
                <Link to={`/Product/${value.id}`} className='text-center text-white font-bold text-xl bg-[#D93E22] py-2 w-full'>Buy Now</Link>
              </div>
            ))}
          </div>
          <div className='pt-20'>
            <Link to='/shop' className='text-white font-bold text-xl bg-[#D93E22] py-3 px-20'>SHOP MORE</Link>
          </div>
        </div>
      </section>

      <ReviewSlider />
      <InstaSlider />

      <section className='px-5 py-16 flex flex-wrap items-center gap-5 justify-evenly max-lg:flex-col bg-[#D93E22] text-white'>
        <h4 className='text-2xl font-extrabold'>Stay Up to Date</h4>
        <div className='flex flex-wrap items-center justify-center max-sm:gap-3 max-sm:flex-col '>
          <input className='w-96 py-2 px-5 bg-[#EFF3EA] border outline-none max-md:w-80 max-sm:text-sm'
            type="text" placeholder='Enter Email Address...' />
          <button type='submit' className='py-[7px] px-8 text-lg max-sm:text-sm bg-black transition'>Subscribe</button>
        </div>
      </section>
    </>
  )
}

export default Homepage
