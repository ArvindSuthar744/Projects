import React from 'react'
import ImgSlider from './ImgSlider'

function ReviewSlider() {
  return (
    <>
        <section className='flex flex-col items-center justify-center py-16 px-10'>
          <div>
            <h2 className='text-3xl font-extrabold text-center'>TURNING ORDINARY MOMENTS INTO ADVENTURE</h2>
            <div className='flex gap-3 items-center justify-center max-sm:flex-col pt-4'>
              <img src="../assets/star.webp" className='h-[22px]' alt="" />
              <p className='font-bold'>Trusted by 1000's of players and coaches</p>
            </div>
          </div>
          <ImgSlider rounded={true}/>
        </section>
    </>
  )
}

export default ReviewSlider
