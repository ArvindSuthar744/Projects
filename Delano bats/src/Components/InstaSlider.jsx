import React from 'react'
import ImgSlider from './ImgSlider'

function InstaSlider() {
  return (
    <>
        <section className='flex flex-col items-center justify-center py-16 px-10 bg-[#010A1E]'>
          <div className='text-white'>
            <h2 className='text-4xl font-extrabold text-center'>FOLLOW US ON INSTAGRAM</h2>
            <h2 className='text-2xl font-extrabold text-center pt-3'>@delanobatco</h2>
          </div>
          <ImgSlider/>
        </section>
    </>
  )
}

export default InstaSlider
