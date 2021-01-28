import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
