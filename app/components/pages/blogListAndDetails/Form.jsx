"use client";

import { useInputForm } from "../../../hooks/useInputForm";

export default function Form() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting, formStatus } =
    useInputForm();

  return (
    <div className="comment-form-wrap">
      <h3>Leave A Comment</h3>
      <p className="my-10">
        Your email address will not be published. Required fields are marked *
      </p>

      <div className="ht-contact-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Your name"
                className={errors.name ? "mb-1" : ""}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-danger small mt-1 d-block text-start ps-3">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email address"
                className={errors.email ? "mb-1" : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger small mt-1 d-block text-start ps-3">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="col-12">
              <input
                type="text"
                placeholder="Select subject"
                className={errors.subject ? "mb-1" : ""}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <span className="text-danger small mt-1 d-block text-start ps-3">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="col-12">
              <textarea
                placeholder="Type your message"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <span className="text-danger small mt-1 d-block text-start ps-3">
                  {errors.message.message}
                </span>
              )}
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="ht-btn style-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Posting..." : "Post Comment"}
              </button>
              {formStatus.message && (
                <div
                  className={`mt-3 alert ${
                    formStatus.type === "success"
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
