import React, {memo} from 'react';
import styles from './MealItem.module.css';
import {MealItemForm} from './MealItemForm';

const MealItemImpl = ({title, description, price}) => {
  const formattesPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}> {description} </div>
        <div className={styles.price}> {formattesPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export const MealItem = memo(MealItemImpl);
