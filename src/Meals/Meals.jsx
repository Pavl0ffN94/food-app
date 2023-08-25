import React, {memo} from 'react';
import {MealList} from './MealList';
import {PromoText} from './PromoText';

const MealsImpl = () => {
  return (
    <>
      <PromoText />
      <MealList />
    </>
  );
};

export const Meals = memo(MealsImpl);
