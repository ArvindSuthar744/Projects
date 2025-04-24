import React from 'react'
import Navigation from '../Components/Navigation'
import ReviewSlider from '../Components/reviewSlider'
import { products } from '../Context-api/Products'
import { Link } from 'react-router-dom'
import InstaSlider from '../Components/InstaSlider'

function Shoppage() {
  return (
    <div>
      <div className='bg-black py-3'>
        <Navigation />
      </div>
      <div className='h-36 overflow-hidden flex items-center justify-center bg-[url(https://delano-bats-five.vercel.app/assets/ballpark-min-DszuZj8j.webp)] bg-fixed bg-cover bg-center'>
        <h2 className='text-center text-3xl font-extrabold text-white'>Shop</h2>
      </div>

      <section className='bg-black text-white py-20 px-7  '>
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center gap-5 flex-wrap max-lg:gap-14'>
            {products.map((value, index)=>(
              <div key={index} className='w-[23%] max-lg:min-w-[325px] max-md:w-full flex flex-col items-center gap-3 justify-center p-5 pb-10 bg-white text-black'>
                <Link to={`/Product/${value.id}`}>
                <img src="../assets/Product-cart-img.webp" alt={value.name} />
                </Link>
                <h4 className='text-xl text-center font-extrabold'>{value.name}</h4>
                <p className='text-center'>$ {value.price}</p>
                <Link to={`/Product/${value.id}`} className='text-center text-white font-bold text-xl bg-[#D93E22] py-2 w-full'>Buy Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewSlider />
      <InstaSlider/>
    </div>
  )
}

export default Shoppage
