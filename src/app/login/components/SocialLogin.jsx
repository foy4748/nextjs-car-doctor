"use client";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function SocialLogin() {
  const router = useRouter();

  const handleSocialLogin = async (providerName) => {
    console.log("SOCIAL LOGIN", providerName);
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
    if (result.ok) {
      router.push("/");
      toast.success(`Logged In Successfully using ${providerName}`);
    } else {
      toast.error("Something Went Wrong");
    }
    console.log(result);
  };
  return (
    <div className="flex justify-center gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGoogle type="button" />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGithub type="button" />
      </p>
    </div>
  );
}
