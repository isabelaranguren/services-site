"use client";
import { BUSINESS_INFO } from "@/app/lib/constants";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-hot-toast";
import Button from "../ui/Button";

interface FormData {
  name: string;
  address: string;
  company: string;
  city: string;
  zip: string;
  email: string;
  state: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  address: "",
  company: "",
  city: "",
  zip: "",
  email: "",
  state: "",
  phone: "",
  message: "",
};

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      toast.success("Thank you! Your message has been sent.");
      setFormData(initialFormData); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputBaseClass =
    "w-full border-b border-dark-gray-50 bg-transparent px-4 py-3.5 text-base text-text-dark placeholder-dark-gray transition-colors duration-200 focus:border-dark focus:outline-none";

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 md:flex-row md:gap-12 lg:gap-[50px]">
          <div className="flex w-full flex-col gap-8 md:w-2/5 md:gap-12">
            <div>
              <h5 className="mb-5 text-xl font-semibold text-text-dark">
                Location
              </h5>
              <a
                href="https://maps.google.com/?q=359+Vanderbilt+Ave,+Brooklyn,+NY+11238,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-dark-gray transition-colors hover:text-primary"
              >
                359 Vanderbilt Ave, Brooklyn, NY 11238, USA
              </a>
            </div>
            <div>
              <h5 className="mb-5 text-xl font-semibold text-text-dark">
                Contact Us
              </h5>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block text-base text-dark-gray transition-colors hover:text-primary"
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="mt-2.5 block text-base text-dark-gray transition-colors hover:text-primary"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Right Block: Form */}
          <div className="w-full md:w-3/5">
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
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputBaseClass}
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-7 md:flex-row md:gap-8">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputBaseClass}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputBaseClass}
                />
              </div>

              {/* Row 3 - Wrap items */}
              <div className="flex flex-wrap gap-7 md:flex-nowrap md:gap-8">
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`${inputBaseClass} md:w-[145px]`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBaseClass} grow`}
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className={`${inputBaseClass} md:w-[145px]`}
                />
              </div>

              {/* Phone Input */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputBaseClass}
                />
              </div>

              {/* Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBaseClass} min-h-[150px] resize-y`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <SubmitButton />
              </div>
            </form>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 rounded border border-green-300 bg-green-50 p-4 text-green-700">
                Thank you! Your submission has been received!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 rounded border border-red-300 bg-red-50 p-4 text-red-700">
                Oops! Something went wrong while submitting the form.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
