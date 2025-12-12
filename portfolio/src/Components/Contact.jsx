// src/components/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema (Yup)
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  // Note: Your current validation is min(10) and max(10), which is correct for 10 digits
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Please enter your mobile number"),
  emailSubject: Yup.string()
    .required("Please enter the email subject"),
  yourMessage: Yup.string()
    .required("Please enter your message"),
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      emailSubject: "",
      yourMessage: "",
    },
    validationSchema,
    validateOnChange: true, // live validation while typing
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        setStatus("");

        // POST request to backend
        await axios.post("http://localhost:8080/api/contact/add-data", values, {
          headers: { "Content-Type": "application/json" },
        });

        setStatus("THANK YOU!");
        resetForm();
      } catch (error) {
        console.error("Submission Error:", error);
        setStatus("PLEASE TRY AGAIN...");
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 2000);
      }
    },
  });

  // 👇 The change is in the structure within the JSX return block 👇

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <form onSubmit={formik.handleSubmit}>
        
        {/* --- ROW 1: FULL NAME and EMAIL ADDRESS --- */}
        <div className="input-box" style={{ display: 'flex', gap: '15px' }}>
          
          {/* FULL NAME FIELD GROUP */}
          <div className="input-field-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Full Name"
              disabled={isSubmitting}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div style={{ color: "red", marginTop: '5px' }}>{formik.errors.fullName}</div>
            )}
          </div>

          {/* EMAIL ADDRESS FIELD GROUP */}
          <div className="input-field-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email Address"
              disabled={isSubmitting}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red", marginTop: '5px' }}>{formik.errors.email}</div>
            )}
          </div>

        </div>

        {/* --- ROW 2: MOBILE NUMBER and EMAIL SUBJECT --- */}
        <div className="input-box" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          
          {/* MOBILE NUMBER FIELD GROUP */}
          <div className="input-field-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <input
              type="tel"
              name="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mobile Number"
              disabled={isSubmitting}
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber && (
              <div style={{ color: "red", marginTop: '5px' }}>{formik.errors.mobileNumber}</div>
            )}
          </div>

          {/* EMAIL SUBJECT FIELD GROUP */}
          <div className="input-field-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="emailSubject"
              value={formik.values.emailSubject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email Subject"
              disabled={isSubmitting}
            />
            {formik.touched.emailSubject && formik.errors.emailSubject && (
              <div style={{ color: "red", marginTop: '5px' }}>{formik.errors.emailSubject}</div>
            )}
          </div>
          
        </div>

        {/* --- MESSAGE TEXTAREA --- */}
        <textarea
          name="yourMessage"
          cols="30"
          rows="10"
          value={formik.values.yourMessage}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Message"
          disabled={isSubmitting}
          style={{ marginTop: '20px' }} // Add margin for spacing
        ></textarea>
        {formik.touched.yourMessage && formik.errors.yourMessage && (
          <div style={{ color: "red", marginTop: '5px' }}>{formik.errors.yourMessage}</div>
        )}

        {/* --- SUBMIT BUTTON --- */}
        <input
          type="submit"
          value={isSubmitting ? "Sending..." : "Send Message"}
          className="btn"
          disabled={isSubmitting}
        />

        {/* --- STATUS MESSAGE --- */}
        {status && (
          <div className="status-message">
            <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{status}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;