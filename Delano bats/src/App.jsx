import './App.css'
import Homepage from './page/Homepage'
import Shoppage from './page/Shoppage'
import SingleProduct from './page/SingleProduct'
import Checkoutpage from './page/Checkoutpage'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Footer from './Components/Footer'
import { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export const dataContext = createContext();

function App() {

  const [carItems, setCartItems] = useState([]);

  return (
    <>
      <dataContext.Provider value={{ carItems, setCartItems }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/shop' element={<Shoppage />}></Route>
            <Route path='/product/:proId' element={<SingleProduct />}></Route>
            <Route path='/checkout' element={<Checkoutpage />}></Route>
          </Routes>
          <Footer />
          <ToastContainer/>
        </BrowserRouter>
      </dataContext.Provider>
    </>
  )
}

export default App
