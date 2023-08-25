import React, {memo, useContext} from 'react';
import {Modul} from '../UI/Modul';
import styles from './Cart.module.css';
import CartContext from 'store/cart-context';

const CartImpl = ({onHideCart}) => {
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.totalAmaunt;
  console.log(totalAmount);
  const hasItems = cartContext.items.length > 0;

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map(item => (
        <li key={item.id}> {item.name} </li>
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
