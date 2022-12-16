import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, empList }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [empList]);
  return <p className={`center ${type}`}>{msg}</p>;
};

export default Alert;