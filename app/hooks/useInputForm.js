"use client";

import { useState, useEffect, useRef } from "react";
import { useForm as useReactHookForm } from "react-hook-form";
export const useInputForm = ({ onSubmit: customSubmit, delay = 2000 } = {}) => {
  const isMountedRef = useRef(false);

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

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (customSubmit) {
        await customSubmit(data);
      }
      if (!isMountedRef.current) return;

      setFormStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      reset();
    } catch {
      if (!isMountedRef.current) return;

      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };
  useEffect(() => {
    if (!formStatus.type) return;
    const timer = setTimeout(() => {
      if (!isMountedRef.current) return;
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
