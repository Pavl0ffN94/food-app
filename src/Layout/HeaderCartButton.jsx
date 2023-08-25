import React, {memo} from 'react';
import {CardIcon} from 'Cart/CardIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButtonImpl = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CardIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};

export const HeaderCartButton = memo(HeaderCartButtonImpl);
