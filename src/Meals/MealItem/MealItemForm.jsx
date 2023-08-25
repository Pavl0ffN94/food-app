import React, {memo} from 'react';
import styles from './MealItemForm.module.css';

const MealItemFormImpl = () => {
  return (
    <form className={styles.form}>
      <input />
      <button>Добавить</button>
    </form>
  );
};

export const MealItemForm = memo(MealItemFormImpl);
