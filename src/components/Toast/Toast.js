import React from 'react';
import './Toast.css';

const Toast = ({ error = 'Something went wrong' }) => (
  <div className='toastContent'>
    <div className='toast'>
      {error}
    </div>
  </div>
);

export default Toast;
