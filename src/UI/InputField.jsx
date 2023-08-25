import React, {memo} from 'react';
import styles from './InputField.module.css';

const InputFieldImpl = React.forwardRef(({label, input}, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input} />
    </div>
  );
});

export const InputField = memo(InputFieldImpl);
