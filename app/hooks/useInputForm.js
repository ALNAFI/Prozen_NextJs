"use client";

import { useState, useEffect } from "react";
import { useForm as useReactHookForm } from "react-hook-form";
export const useInputForm = ({ onSubmit: customSubmit, delay = 2000 } = {}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useReactHookForm();
  const [formStatus, setFormStatus] = useState({
    type: null,
    message: "",
  });
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (customSubmit) {
        await customSubmit(data);
      }
      setFormStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      reset();
    } catch {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };
  useEffect(() => {
    if (!formStatus.type) return;
    const timer = setTimeout(() => {
      setFormStatus({ type: null, message: "" });
    }, 5000);
    return () => clearTimeout(timer);
  }, [formStatus.type]);
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    formStatus,
  };
};
