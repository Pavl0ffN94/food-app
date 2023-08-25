import React, {memo} from 'react';
import sushiImg from '../assets/003 sushi.jpg';
import {HeaderCartButton} from './HeaderCartButton';
import style from './Header.module.css';

const HeaderImpl = ({onShowCart}) => {
  return (
    <>
      <header className={style.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={style['main-image']}>
        <img src={sushiImg} alt='Суши' />
      </div>
    </>
  );
};

export const Header = memo(HeaderImpl);
