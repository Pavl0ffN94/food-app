import React, {memo, useContext, useEffect, useState} from 'react';
import {CardIcon} from 'Cart/CardIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from 'store/cart-context';

const HeaderCartButtonImpl = ({onShowCart}) => {
  const [isButtonAnimated, setisButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setisButtonAnimated(true);

    const timer = setTimeout(() => {
      setisButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={onShowCart}>
      <span className={styles.icon}>
        <CardIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export const HeaderCartButton = memo(HeaderCartButtonImpl);
