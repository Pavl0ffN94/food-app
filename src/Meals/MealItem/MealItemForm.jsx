import React, {memo, useRef, useState} from 'react';
import styles from './MealItemForm.module.css';
import {InputField} from 'UI/InputField';

const MealItemFormImpl = ({id, onAddToCart}) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHndler = event => {
    event.preventDefault();

    const inputAmont = amountInputRef.current.value;
    if (inputAmont.trim().length === 0 || +inputAmont < 1 || +inputAmont > 10) {
      setIsAmountValid(false);
      return;
    }
    onAddToCart(+inputAmont);
  };

  return (
    <form className={styles.form} onSubmit={submitHndler}>
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
