"use client";

import { useState } from "react";

export default function CommentForm({ postId }) {
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post: postId,
            author_name: formData.name,
            author_email: formData.email,
            content: formData.comment,
          }),
        }
      );

      if (response.ok) {
        setResponseMessage("Comment submitted successfully!");
        setFormData({ name: "", email: "", comment: "" });
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.message || "Failed to submit comment.");
      }
    } catch (error) {
      setResponseMessage("Error submitting comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
      {responseMessage && <p className="text-teal-600">{responseMessage}</p>}
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Comment</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
