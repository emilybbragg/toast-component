//packages
import React from 'react';

//components
import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider/ToastProvider';
import Footer from '../Footer';


function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;