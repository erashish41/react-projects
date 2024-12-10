import React from 'react'
import HomePage from './components/Pages/HomePage'
import Footer from './components/Pages/FooterPage'
import ProductList from './components/Products/ProductList'

const App = () => {
  return (
    <div>
      <HomePage />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App