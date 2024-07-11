import { useEffect, useState } from 'react'
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

import Logo from "./assets/7.png"
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ProductGallery from './Components/ProductGallery';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import { Badge, Button } from 'react-bootstrap';
import Checkout from './Components/Checkout';

function App() {
  const navigate = useNavigate() 
  const [user, setUser] = useState('')
  const [cartItems, setCartItems] = useState({})
  console.log(cartItems)

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail)
    }
  },[]);

  const handleAddToCart = (item) => {
    setCartItems({...cartItems, ...item});
  }
  // function handleAddToCart(item){
  //   setCartItems({...cartItems, item})
  // }
  // lineno: 40  in the place of href='/' keep onClick={()=> {navigate('/')} because we store data in "local state" instead of "local storage" so we we navigate by clicking on icon we loose data for that use useNavigate() hook
  return (
    <div>
      <Navbar className="instabuy-navbar">
          <Navbar.Brand onClick={()=> {navigate('/')}}>  
            <img 
              src= {Logo}
               alt=""
               width="30"
               height="30"
               className='logo'
            />
            Instabuy
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={()=>{navigate('/cart')}} >cart &nbsp; {Object.keys(cartItems).length > 0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
            &nbsp;
            &nbsp;
            <Button onClick={()=> navigate('/Login')}>{user ? "Logout": "LogIn"}</Button>
           </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/Login' element={<Login setUser={setUser}/>}/>
        <Route path='/SignUp' element={<SignUp setUser={setUser}/>}/>
        <Route path='/ProductsGallery' element= {<ProductGallery/>}/>
        <Route path='/Product/:id' element= {<ProductDetails  handleAddToCart = { handleAddToCart} cartItems ={cartItems}/>}/>
        <Route path='/cart' element= {<Cart cartItems = {cartItems}/>}/>
        <Route path = '/checkout' element={<Checkout/>}/>
      </Routes>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <ProductGallery/> */}
    </div>
  )
}

export default App
