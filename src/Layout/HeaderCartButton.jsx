import React, {memo, useContext} from 'react';
import {CardIcon} from 'Cart/CardIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from 'store/cart-context';

const HeaderCartButtonImpl = ({onShowCart}) => {
  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amont;
  }, 0);

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CardIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export const HeaderCartButton = memo(HeaderCartButtonImpl);
