"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f6m2i1i",
        "template_rvem0gs",
        formData,
        "4ciNb_E3sKaGw4sOj"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", query: "" });
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div
      className={
        "w-10/12 mx-auto mt-8 mb-[8rem] md:mb-[10rem] p-6 bg-[#ffe599] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-opacity-30 border-white text-center flex flex-col justify-around items-center min-h-screen"
      }>
      <h2 className="text-3xl font-bold text-bodyheading text-center py-8">
        Contact Us
      </h2>
      <p className="text-lg text-center my-5 text-bodytext">
        Have a question or want to get in touch? Fill out the form below and we
        will get back to you as soon as possible.
      </p>
      <p className="text-lg text-center my-5 text-bodytext">
        We take your privacy and the security of your data very seriously. As
        part of our commitment to safeguarding your information, we ensure that
        all personal data shared through this form is handled in compliance with
        the General Data Protection Regulation (GDPR). Any information you
        provide will be used solely for the purpose of responding to your query
        and improving our services. We encourage you to review our privacy
        policy, which outlines how we collect, store, and use your data. Should
        you have any concerns or require further clarification, please do not
        hesitate to contact us.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-bodyheading mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg text-bodytext bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-bodyheading mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg text-bodytext bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="query"
            className="block text-lg font-medium text-bodyheading mb-2">
            Query
          </label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg text-bodytext bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-[#F7B318] text-lg text-primary font-bold rounded-lg hover:bg-[#e6a514] transition duration-300">
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
