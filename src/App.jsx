import axios from './axios'
import './App.css'
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
