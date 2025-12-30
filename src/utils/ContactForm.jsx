import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wc988kc",
        "template_maroa3j",
        formRef.current,
        "bBLoy3Y_EniTY0J-7"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 mx-4 sm:mx-0">
      <h2 className="text-2xl font-semibold text-center text-gray-100 mb-4">
        Contact Me
      </h2>

      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 resize-none outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
