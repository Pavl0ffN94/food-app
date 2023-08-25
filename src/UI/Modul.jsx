import React, {memo} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modul.module.css';

const Backdrop = ({onHideCart}) => {
  return <div className={styles.backdrop} onClick={onHideCart}></div>;
};

const ModulWindow = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}> {props.children} </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const ModulImpl = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModulWindow> {props.children} </ModulWindow>,
        portalElement,
      )}
    </React.Fragment>
  );
};

export const Modul = memo(ModulImpl);
