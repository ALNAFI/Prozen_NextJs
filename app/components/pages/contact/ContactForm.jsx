"use client";

import { useInputForm } from "../../../hooks/useInputForm";

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, formStatus } =
    useInputForm();

  return (
    <section className="ht-contact-form-area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
          </span>
          <h2
            className="title text-black"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Have questions? <br />
            contact us!
          </h2>
        </div>
        <div className="ht-contact-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-lg-10">
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
                      {...register("subject", {
                        required: "Subject is required",
                      })}
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
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <span className="text-danger small mt-1 d-block text-start ps-3">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="ht-btn style-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "SEND MESSAGE HERE"}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
