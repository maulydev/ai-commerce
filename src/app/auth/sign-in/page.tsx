"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Breadcrumbs from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import Link from "next/link";

// ✅ Zod schema definition
const signInSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// ✅ Infer the TypeScript type
type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("✅ Form Submitted:", data);
    // Perform sign-in API call here...
  };

  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ href: "/auth/sign-in", label: "Sign In" }]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* LEFT: Sign In Form */}
        <div className="bg-gray-50 border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-6">Sign in</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address:
              </label>
              <input
                type="email"
                {...register("email")}
                className={`w-full border p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password:
              </label>
              <input
                type="password"
                {...register("password")}
                className={`w-full border p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="text-gray-700 hover:text-gray-900"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition w-full"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: Create Account Info */}
        <div className="bg-gray-50 border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-3">New Customer?</h2>
          <p className="text-gray-700 mb-4">
            {"Create an account with us and you'll be able to:"}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
            <li>Save items to your Wish List</li>
          </ul>

          <Link
            href="/auth/sign-up"
            className="inline-block bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
