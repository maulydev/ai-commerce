"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import Breadcrumbs from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";

// ✅ Zod schema definition
const signUpSchema = z
  .object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyName: z.string().optional(),
    phone: z.string().optional(),
    address1: z.string().min(1, "Address Line 1 is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State/Province is required"),
    zip: z.string().min(1, "Zip/Postcode is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = async (data: SignUpFormData) => {
    if (!captchaValue) {
      alert("Please verify you are not a robot!");
      return;
    }

    const response = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ captcha: captchaValue }),
    });

    const resData = await response.json();
    if (resData.success) {
      console.log("✅ Account data:", data);
      alert("Account created successfully!");
    } else {
      alert("Captcha verification failed!");
    }
  };

  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ href: "/auth/sign-up", label: "New Account" }]} />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">New Account</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="text"
              {...register("firstName")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="text"
              {...register("lastName")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              {...register("companyName")}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Address 1 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Line 1 <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="text"
              {...register("address1")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.address1 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address1 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address1.message}
              </p>
            )}
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Line 2
            </label>
            <input
              type="text"
              {...register("address2")}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Suburb/City <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="text"
              {...register("city")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Country <span className="text-red-500">REQUIRED</span>
            </label>
            <select
              {...register("country")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Ghana</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium mb-1">
              State/Province <span className="text-red-500">REQUIRED</span>
            </label>
            <select
              {...register("state")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Choose a State</option>
              <option>California</option>
              <option>Texas</option>
              <option>New York</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}
          </div>

          {/* ZIP */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Zip/Postcode <span className="text-red-500">REQUIRED</span>
            </label>
            <input
              type="text"
              {...register("zip")}
              className={`w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black ${
                errors.zip ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
            )}
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="mt-4">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleCaptchaChange}
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2.5 hover:bg-gray-800 transition"
          >
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
