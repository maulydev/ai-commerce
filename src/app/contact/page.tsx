"use client";

import React, { useRef, useState } from "react";
import Breadcrumbs from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Define schema
const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters."),
  phoneNumber: z
    .string()
    .regex(/^[0-9+\-\s()]*$/, "Phone number contains invalid characters.")
    .optional(),
  email: z.string().email("Invalid email address."),
  orderNumber: z.string().optional(),
  companyName: z.string().optional(),
  rmaNumber: z.string().optional(),
  comments: z.string().min(10, "Comments must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [verified, setVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    if (!verified) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    console.log("Form Data:", data);
    alert("Form submitted successfully ✅");
  };

  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ href: "", label: "Contact Us" }]} />

      <div className="mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-1">
          We’re happy to answer questions or help you with returns.
        </p>
        <p className="text-gray-600 mb-6">
          Please fill out the form below if you need assistance.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name + Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="tel"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Address + Order Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500 ml-1">Required</span>
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Number
              </label>
              <input
                {...register("orderNumber")}
                type="text"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </div>

          {/* Company Name + RMA Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                {...register("companyName")}
                type="text"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                RMA Number
              </label>
              <input
                {...register("rmaNumber")}
                type="text"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </div>

          {/* Comments/Questions */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              Comments/Questions
              <span className="text-red-500 ml-1">Required</span>
            </label>
            <textarea
              {...register("comments")}
              rows={5}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            ></textarea>
            {errors.comments && (
              <p className="text-red-500 text-sm mt-1">
                {errors.comments.message}
              </p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="pt-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={() => setVerified(true)}
              onExpired={() => setVerified(false)}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 w-full ml-auto">
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition"
            >
              SUBMIT FORM
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ContactPage;
