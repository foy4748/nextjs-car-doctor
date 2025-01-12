import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Login</h1>
      <section className="container mx-auto grid grid-cols-12">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <Image
            className="hidden md:block"
            src={"/assets/images/login/login.svg"}
            width={460}
            height={500}
            alt={"Authentication Image"}
          />
        </div>

        {/* Right Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <form className="w-full max-w-lg space-y-8">
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
        </div>
      </section>
    </>
  );
}
