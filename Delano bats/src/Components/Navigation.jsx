import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { dataContext } from '../App';

function Navigation() {

  const [cartshow, Setcartshow] = useState(false);
  const [menushow, Setmenu] = useState(false);
  const { carItems } = useContext(dataContext);

  const Handlercartshow = () => {
    Setcartshow(!cartshow);
  };
  const Handlermenu = () => {
    Setmenu(!menushow);
  };

  const totalPrice = carItems.reduce((total, item) => total + item.price * item.quantity, 0);
  console.log(totalPrice)

  // const handleIncQuantity = (qun) => {
  //   setQuantity((qun) => qun + 1)
  // }
  // const handleDecQuantity = (qun) => {
  //   setQuantity((qun) => (qun > 1 ? qun - 1 : 1))
  // }

  return (
    <div className='flex flex-col justify-center bg-transparent '>
      <div className='w-[85vw]  m-auto flex items-center justify-between text-white font-bold'>
        <ul className='flex gap-10 max-lg:hidden'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Shop</NavLink>
          </li>
          <li>FZN Technology</li>
        </ul>
        <div className='logo-img'>
          <img src="data:image/webp;base64,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" alt="logo img" />
        </div>
        <ul className='flex gap-10 items-center max-lg:gap-5'>
          <li className='max-lg:hidden'>About</li>
          <li className='max-lg:hidden'>Team</li>
          <li className='max-lg:hidden'>blog</li>
          <li className='max-lg:text-xl'>
            <button onClick={Handlercartshow} className='flex gap-1'>
              <svg className="e-font-icon-svg e-eicon-cart-medium" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white">
                <path d="M740 854C740 883 763 906 792 906S844 883 844 854 820 802 792 802 740 825 740 854ZM217 156H958C977 156 992 173 989 191L957 452C950 509 901 552 843 552H297L303 581C311 625 350 656 395 656H875C892 656 906 670 906 687S892 719 875 719H394C320 719 255 666 241 593L141 94H42C25 94 10 80 10 62S25 31 42 31H167C182 31 195 42 198 56L217 156ZM230 219L284 490H843C869 490 891 470 895 444L923 219H230ZM677 854C677 791 728 740 792 740S906 791 906 854 855 969 792 969 677 918 677 854ZM260 854C260 791 312 740 375 740S490 791 490 854 438 969 375 969 260 918 260 854ZM323 854C323 883 346 906 375 906S427 883 427 854 404 802 375 802 323 825 323 854Z"></path>
              </svg>
              <p className='text-red-500 font-bold'>{carItems.length}</p>
            </button>
          </li>
          <li className='hidden max-lg:block'>
            <button onClick={Handlermenu} >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {menushow && (
        <ul className='w-[85vw] m-auto p-3 bg-white text-black flex flex-col gap-1 text-lg font-extrabold z-40'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/shop'>Shop</NavLink></li>
          <li>FZN Technology</li>
          <li>About</li>
          <li>Team</li>
          <li>blog</li>
        </ul>
      )}

      {cartshow && (

        <div className='w-[350px] h-[100%] overflow-y-auto flex flex-col gap-4 bg-white text-black absolute right-0 top-0 z-30 p-5'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-extrabold'>My Cart (0)</h2>
            <i className="fa-solid fa-x text-xl font-extrabold" onClick={Handlercartshow}></i>
          </div>
          <ul>
            {carItems?.length > 0 ? (
              carItems.map((value, idx) => (
                <li key={idx}>
                  <div className='flex flex-col justify-center gap-3'>
                    <img src={value.img} className='py-14' alt="" />
                    <h3 className='text-xl font-bold'>{value.name}</h3>
                    <p>Price : {value.price}</p>
                    <div className='flex gap-3 items-center '>
                      Quantity :
                      <div className='flex gap-5 items-center'>
                        <i className="fa-solid fa-minus text-blue-600" onClick={()=>handleDecQuantity(value.quantity)}></i>
                        <p>{value.quantity}</p>
                        <i className="fa-solid fa-plus text-green-600" onClick={()=>handleIncQuantity(value.quantity)}></i>
                      </div>
                    </div>
                    <button className='py-1 text-red-700 text-start'>
                      <i className="fa-solid fa-trash"></i> Remove
                    </button>
                  </div>
                </li>
              )))
              :
              (<p>Your cart is empty.</p>)
            }


          </ul>
          <div className='border-t-2 border-gray-300 pt-2 text-center'>
            Price {totalPrice}
          </div>
          <div>
            <button className='w-full bg-[#D93E22] text-white py-2 px-10'>Proceed To Checkout</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Navigation
