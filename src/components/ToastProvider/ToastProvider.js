//packages
import React, { useState, createContext, useCallback } from "react";

//components
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = createContext();


function ToastProvider({ children }) {

  const [toasts, setToasts] = useState([
    {
      id: crypto.randomUUID(),
      message: "test",
      variant: "success"
    }
  ])

  const handleEscape = useCallback(() => {
    setToasts([])
  }, [])

  useEscapeKey("Escape", handleEscape)

  const createToast = (message, variant) => {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ]
    setToasts(nextToasts)
  }

  const dismissToast = (id) => {
    const nextToasts = toasts?.filter((toast) => toast?.id !== id)
    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
};

export default ToastProvider; 