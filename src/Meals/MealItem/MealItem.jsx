import React, {memo, useContext} from 'react';
import styles from './MealItem.module.css';
import {MealItemForm} from './MealItemForm';
import CartContext from 'store/cart-context';

const MealItemImpl = ({title, description, price, id}) => {
  const cartContext = useContext(CartContext);

  const formattesPrice = `$${price.toFixed(2)}`;
  const addToCartHandeler = amont => {
    cartContext.addItem({
      id,
      title,
      amont,
      price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}> {description} </div>
        <div className={styles.price}> {formattesPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandeler} id={id} />
      </div>
    </li>
  );
};

export const MealItem = memo(MealItemImpl);
