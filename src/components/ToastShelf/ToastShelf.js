//packages
import React from 'react';

//components
import Toast from '../Toast';

//styles
import styles from './ToastShelf.module.css';


function ToastShelf({ toasts, handleDismiss }) {

  return (
    <ol className={styles.wrapper}>
      {toasts?.map((toast) => (
        <li
          key={toast.id}
          className={styles.toastWrapper}
        >
          <Toast
            id={toast.id}
            variant={toast.variant}
            handleDismiss={handleDismiss}
          >
            {toast.message}
          </Toast>
        </li>
        ))
      }
    </ol>
  );
}

export default ToastShelf;