//packages
import React, { useContext } from 'react';

//components
import Toast from '../Toast';

//styles
import styles from './ToastShelf.module.css';

//context
import { ToastContext } from '../ToastProvider/ToastProvider';


function ToastShelf({ handleDismiss }) {
  
  const { toasts  } = useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
    >
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