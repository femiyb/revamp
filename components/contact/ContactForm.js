"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wpforms/v1/forms/65940/entries`, // Replace <form-id> with your WPForms ID
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            },
          }),
        }
      );

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setFormStatus(`Error: ${errorData.message || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-teal-500 mb-6 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-3 rounded hover:bg-teal-600"
          >
            Submit
          </button>
        </form>
        {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
      </div>
    </section>
  );
}
