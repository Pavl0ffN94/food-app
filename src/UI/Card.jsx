import React, {memo} from 'react';
import styles from './Card.module.css';

const CardImpl = props => {
  return <div className={styles.card}>{props.children}</div>;
};

export const Card = memo(CardImpl);
