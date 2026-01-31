"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mnqwjzpq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message ❌");
    }
  };

  return (
    <section className="flex justify-center px-6 mt-10">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow text-center w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Me</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Feel free to connect with me through my social links in the footer, or
          reach out directly by email. I’d love to hear from you!
        </p>

        {/* Email */}
        <p className="text-lg mb-6">
          📧{" "}
          <a
            href="mailto:wwwayesha0irfan@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            wwwayesha0irfan@gmail.com
          </a>
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
