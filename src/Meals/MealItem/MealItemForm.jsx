import React, {memo, useRef, useState, useCallback} from 'react';
import styles from './MealItemForm.module.css';
import {InputField} from 'UI/InputField';

const MealItemFormImpl = ({id, onAddToCart}) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = useCallback(
    event => {
      event.preventDefault();
      const inputAmount = amountInputRef.current.value;
      if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
        setIsAmountValid(false);
        return;
      }
      onAddToCart(+inputAmount);
    },
    [amountInputRef, setIsAmountValid, onAddToCart],
  );

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <InputField
        ref={amountInputRef}
        label='Колличество'
        input={{
          id: id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p> Введите количество от 1 до 10</p>}
    </form>
  );
};

export const MealItemForm = memo(MealItemFormImpl);
