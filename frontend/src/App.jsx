import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Container>
    <Routes>
      <Route exact path="/" element={<HomeScreen/>}/> 
      <Route path="/product/:id" element={<ProductScreen/>}/> 
      <Route exact path="/cart" element={<CartScreen/>}/>
      <Route path="/cart/:id" element={<CartScreen/>}/> 
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>}/>
    </Routes>
    </Container>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
