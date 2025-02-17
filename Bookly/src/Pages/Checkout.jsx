import React, { useContext, useState } from 'react'
import Header from '../Component/Header'
import { useNavigate } from 'react-router-dom';
import { Cartproducts, Userlogin } from '../App';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {
    const navigate = useNavigate();
    const {loginbtn} =  useContext(Userlogin);
    const {cart,setCart} =  useContext(Cartproducts);
    const [gpay, setGpay] = useState(false);
    const [phonepay, setPhonepay] = useState(false);
    const [check, setCheck] = useState(false);
    const [input, setInput] = useState('');

    const handlertotal = () => {
        if (!cart || cart.length === 0) return 0;
        return cart.reduce((total, item) => total + item.bookPrice * item.quantity, 0);
    };

    const total = handlertotal()

    console.log(handlertotal)

    const handleOrderClick = () => {
          if (loginbtn) {
            if (gpay || phonepay) {
              if (parseFloat(input) === total) {
                const paymentMethod = gpay ? "Gpay" : "Phonepay";
                alert(`${paymentMethod} Order Successful!`) 
                toast.success(`${paymentMethod} Order Successful!`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored",
                }); 
                setTimeout(()=>{
                  setCart([]);
                  navigate('/')  
                },3000)      
              } else {
                alert(`Please enter the correct amount: ${total} for ${gpay ? 'G-pay' : 'Phone Pay'}`);
              }
            } else if (!gpay && !phonepay) {
              alert('Order confirmed with Cash on Delivery');
              toast.success('Cash on Delivery Order Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });
              setTimeout(()=>{
                setCart([]);
                navigate('/')  
              },3000) 
            }
          } else {
            alert("Please Login First");
            navigate('/login');
          }
      };



    return (
        <div>
            <div>
                <Header Headername={"Checkout"} />
                <div className='payment_detail'>
                    <h3 className='payment_text'>Payment</h3>
                    <div>
                        <div className='bill'>
                            <input type="radio" onClick={() => (setCheck(true), setGpay(true), setPhonepay(false))} name='check' />
                            &nbsp;G-pay {gpay && <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />}
                        </div>
                        <div className='bill'>
                            <input type="radio" onClick={() => (setCheck(true), setPhonepay(true), setGpay(false))} name='check' />
                            &nbsp;Phone Pay {phonepay && <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />}
                        </div>
                        <div className='bill'>
                            <input type="radio" onClick={() => (setCheck(true), setPhonepay(false), setGpay(false))} name='check' />
                            &nbsp;Cash On Delivery
                        </div>
                    </div>
                    <h4>Total: ${handlertotal()}</h4>
                    <button className="bg-success text-white btn" onClick={handleOrderClick}>Place Order</button>
                </div>
                <ToastContainer/>
            </div>



        </div>
    )
}

export default Checkout
