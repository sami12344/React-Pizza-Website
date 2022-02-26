
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import Hero from './components/Hero'
import Products from './components/Products'
import { productData, productDataTwo } from './data'
import Feature from './components/Feature/Feature'
import Loading from './components/Loader/Loading'
import React, { useState } from 'react'
import Footer from './components/Footer'



function App() {
  const [loading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 7000);
  if (loading) {
    return (
      <Router>
        <GlobalStyle></GlobalStyle>
        <Loading></Loading>
      </Router>
    )
  }
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Hero></Hero>
      <Products heading='Choose your favorite' data={productData}></Products>
      <Feature></Feature>
      <Products heading='Sweet Treats for You' data={productDataTwo}></Products>
     <Footer></Footer>
    </Router>
  )
}

export default App;
