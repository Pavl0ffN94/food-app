import React, {memo} from 'react';
import styles from './InputField.module.css';

const InputFieldImpl = props => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input></input>
    </div>
  );
};

export const InputField = memo(InputFieldImpl);
