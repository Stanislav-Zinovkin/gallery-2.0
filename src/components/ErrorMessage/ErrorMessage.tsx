import React, { useEffect } from "react";
import toast from "react-hot-toast";

type ErrorMessageProps = {
  error: string | null;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  useEffect(() => {
    if (error) {
      toast.error("Something went wrong :(");
    }
  }, [error]);
  return null;
};

export default ErrorMessage;
