import React, {memo, useContext} from 'react';
import styles from './MealItem.module.css';
import {MealItemForm} from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItemImpl = ({title, description, price, id}) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;
  const addToCartHandeler = amount => {
    cartContext.addItem({
      id,
      title,
      amount,
      price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}> {description} </div>
        <div className={styles.price}> {formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandeler} id={id} />
      </div>
    </li>
  );
};

export const MealItem = memo(MealItemImpl);
