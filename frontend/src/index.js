import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomeScreen/>}/> 
      <Route exact path="/product/:id" element={<ProductScreen/>}/> 
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

