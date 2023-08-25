import React, {useState, useCallback} from 'react';
import { Header } from './Layout/Header';
import { Meals } from 'Meals/Meals';
import { Cart } from 'Cart/Cart';
import CartContextProvider from 'store/CartContextProvider';


function App() {
const[cartISVisible, setCartIsVible] = useState(false);

const showCartHandler = useCallback(()=>{
  setCartIsVible(true);
}, []);

const hideCartIsVisible = useCallback(()=>{
  setCartIsVible(false)
}, [])

  return (
    <CartContextProvider>
     { cartISVisible && <Cart onHideCart= {hideCartIsVisible}/>}
      <Header onShowCart={showCartHandler} />
      <main>
      <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
