import React, { useEffect } from "react";
import toast from "react-hot-toast";
const ErrorMessage = ({ error }) => {
  useEffect(() => {
    if (error) {
      toast.error("Something went wrong :(");
    }
  }, [error]);
  return null;
};

export default ErrorMessage;
