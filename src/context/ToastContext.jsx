import { createContext, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    status: '',
    message: '',
  });

  const showToast = (state) => {
    setState(state);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return <ToastContext.Provider value={{ showToast, show }}>{children}</ToastContext.Provider>;
}
