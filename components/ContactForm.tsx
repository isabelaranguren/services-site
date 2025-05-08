"use client";

import React, { useState, FormEvent } from "react";
import { toast } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        // Your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      setSubmitStatus("success");
      toast.success(result.message || "Thank you! Your message has been sent.");
      setFormData(initialFormData); // Reset form
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputBaseClass =
    "w-full border-b border-dark-gray-50 bg-transparent px-4 py-3.5 text-base text-text-dark placeholder-dark-gray transition-colors duration-200 focus:border-dark focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Row 1 */}
      <div className="flex flex-col gap-7 md:flex-row md:gap-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputBaseClass}
          disabled={isLoading}
        />
      </div>

      {/* Row 2 */}
      <div className="flex flex-col gap-7 md:flex-row md:gap-8">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputBaseClass}
          disabled={isLoading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={handleChange}
          className={`${inputBaseClass} grow`}
          disabled={isLoading}
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
          className={`${inputBaseClass} min-h-[150px] resize-y`}
          disabled={isLoading}
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-700 px-4 py-2 text-white hover:bg-red-800 disabled:opacity-50"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {/* Inline Success/Error Messages (Optional) */}
      {submitStatus === "success" && !isLoading && (
        <div className="mt-4  border border-green-800 bg-green-50 p-4 text-green-700">
          Thank you! Your submission has been received!
        </div>
      )}
      {submitStatus === "error" && !isLoading && (
        <div className="mt-4  border border-red-300 bg-red-50 p-4 text-red-700">
          Oops! Something went wrong while submitting the form.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
