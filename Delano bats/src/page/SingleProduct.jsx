import React, { useContext } from 'react'
import Navigation from '../Components/Navigation'
import ReviewSlider from '../Components/reviewSlider'
import InstaSlider from '../Components/InstaSlider'
import { useParams } from 'react-router-dom'
import { products } from '../Context-api/Products'
import { dataContext } from '../App'
import { toast } from 'react-toastify'

function SingleProduct() {

    const {proId} = useParams();
    const pro = products.find((v)=> v.id == proId);
    const { carItems, setCartItems } = useContext(dataContext);

    const HandlerCart = (item) => {
      const product = products.find((p) => p.id == item.id);
      const existingProduct = carItems.find((item) => item.id === product.id);
        if (existingProduct) {
          setCartItems(
              carItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
            console.log("Product updated in cart.");
            toast.info('Product updated in cart.', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
        } else {
          setCartItems([...carItems, { ...product}]);
            console.log("Product added to cart.");
            toast.success('Product added to cart.', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
        }
  }
  
  return (
    <>
      <div className='bg-black py-5'>
        <Navigation />
      </div>

      <section className='py-20 px-10 bg-black'>
        <div className='py-10 px-5 flex items-start justify-between gap-5 max-lg:flex-col-reverse bg-white text-black'>
          <div className='w-[30%] max-lg:w-[100%]'>
            <h2 className='text-3xl font-extrabold'>{pro.name}</h2>
            <p className='text-xl font-extrabold pt-4'>Price : {pro.price}</p>
            <p className='text-xl font-extrabold pt-4'>Id {pro.id}</p>
          </div>
          <div className='w-[60%] max-lg:w-[100%]'>
            <img src={pro.img} alt="" />
          </div>
        </div>
        <div className=' bg-white text-black p-5'>
          <div className='w-[60%] max-lg:w-[100%]'>
            <p>{pro.detail}</p>
            
            <p className='py-5 font-extrabold'>Powered by FZN Technology™</p>

            <p>FZN Technology™ is the next evolution in baseball bats, giving hitters the best of both worlds: 
              the unmatched sound, feel and look of classic wood with the performance of high-tech materials.
            </p>
          </div>
          <div className='mt-14'>
            <button className='font-extrabold py-2 px-10 bg-[#D93E22] text-white max-sm:w-full'
           onClick={() =>  HandlerCart(pro) }
            >Add to Cart</button>
          </div>
        </div>
      </section>

      <ReviewSlider/>
      <InstaSlider/>

    </>
  )
}

export default SingleProduct
