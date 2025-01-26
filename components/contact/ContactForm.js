"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WPFORMS_API_URL}/forms/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "65940", // Replace with the actual Form ID
            fields: {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            },
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An unexpected error occurred.");
    }
  };

  return (
    <div className="p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      {status && <p className="mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
