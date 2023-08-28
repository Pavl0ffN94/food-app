import React, {memo, useContext} from 'react';
import {Modul} from '../UI/Modul';
import styles from './Cart.module.css';
import CartContext from '../store/cart-context';
import {CartItem} from './CartItem';

const CartImpl = ({onHideCart}) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = id => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = item => {
    cartContext.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modul onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span> Итого </span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modul>
  );
};

export const Cart = memo(CartImpl);
