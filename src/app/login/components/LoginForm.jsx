"use client";
import React from "react";
import { signIn } from "next-auth/react";

import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Link from "next/link";
//import { useRouter } from "next/navigation";

export default function LoginForm() {
  //const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn("credentials", { email, password, callbackUrl: "/" });
      //router.push("/");
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      alert("Authentication Failed");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold">
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>
      <div className="flex justify-center gap-8">
        <p className="bg-slate-200 rounded-full p-3">
          <FaFacebookF />
        </p>
        <p className="bg-slate-200 rounded-full p-3">
          <FaLinkedinIn />
        </p>
        <p className="bg-slate-200 rounded-full p-3">
          <FaGoogle />
        </p>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}
