import React, {memo} from 'react';
import {DUMMY_MEALS} from 'constant/DUMMY_MEALS';
import {Card} from 'UI/Card';
import {MealItem} from './MealItem/MealItem';
import styles from './MealList.module.css';

const MealListImpl = () => {
  const mealList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      title={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export const MealList = memo(MealListImpl);
