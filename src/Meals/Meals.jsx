import React, {memo} from 'react';
import {MealList} from './MealList';
import {PromoText} from './PromoText';

const MealsImpl = () => {
  return (
    <React.Fragment>
      <PromoText />
      <MealList />
    </React.Fragment>
  );
};

export const Meals = memo(MealsImpl);
