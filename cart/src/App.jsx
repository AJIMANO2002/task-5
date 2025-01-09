import React, { useState } from 'react'
import Navbar from './component/navbar'
import Modal from './component/modal'
import Home from './pages/home'

function App() {

  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (

    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <Home addToCart={addToCart} />
      <Modal
        isOpen={isCartOpen}
        cart={cart}
        closeCart={() => setIsCartOpen(false)}
        removeFromCart={removeFromCart}
      />
    </div>

  )
}

export default App