import { useState } from 'react'

import CartProvider from './store/CartProvider'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'


function App() {
   const [cartIsShown, setCartIsShown] = useState(false)

   const showCarHandler = () => {
    setCartIsShown(true)
   }

   const hideCartHandler = () => {
    setCartIsShown(false)
   }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCarHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App