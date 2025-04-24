// import React, { useState } from 'react'

// function Cart() {

//     const [quantity, setQuantity] = useState(1)
//     const [cartshow, Setcartshow] = useState(false);
  
//     const Handlercartshow = () => {
//       Setcartshow(!cartshow);
//     };
//     const handleIncQuantity = () => {
//         setQuantity((qun) => qun + 1)
//     }
//     const handleDecQuantity = (price) => {
//         setQuantity((qun) => (qun > 1 ? qun - 1 : 1))
//     }

//     return (
//         <>
//             <div className='w-[350px] h-[100vh]  flex flex-col gap-4 bg-white text-black absolute right-0 top-0 z-30 p-5'>
//                 <div className='flex justify-between items-center'>
//                     <h2 className='text-2xl font-extrabold'>My Cart (0)</h2>
//                     <i className="fa-solid fa-x text-xl font-extrabold" onClick={Handlercartshow}></i>
//                 </div>
//                 <ul>
//                     {/* <p>Your cart is empty.</p> */} 
//                     <li>
//                         <div className='flex flex-col  justify-center gap-3'>
//                             <img src="" alt="" />
//                             <h3 className='text-xl font-bold'>Name</h3>
//                             <p>Price : $ 100</p>
//                             <div className='flex gap-3 items-center '>
//                                 Quantity :
//                                 <div className='flex gap-5 items-center'>
//                                     <i className="fa-solid fa-minus text-blue-600" onClick={handleDecQuantity}></i>
//                                     <p>{quantity}</p>
//                                     <i className="fa-solid fa-plus text-green-600" onClick={handleIncQuantity}></i>
//                                 </div>
//                             </div>
//                             <button className='py-1 text-red-700 text-start '><i class="fa-solid fa-trash"></i> Remove</button>
//                         </div>
//                     </li>
//                 </ul>
//                 <div className='border-t-2 border-gray-300 pt-2 text-center'>
//                     Price 100.00
//                 </div>
//                 <div>
//                     <button className='w-full bg-[#D93E22] text-white py-2 px-10'>Proceed To Checkout</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Cart
