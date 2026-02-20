import React from 'react'
import Nav from './components/Nav'
import Footer from './sections/Footer'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CheckFare from './pages/CheckFare'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkfare' element={<CheckFare />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      {/* <section><Checkout/></section> */}
      <section><Footer /></section>
    </main>
  )
}

export default App