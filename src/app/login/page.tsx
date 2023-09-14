"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="p-4 h-screen  flex items-center justify-center">
      {/* Box */}
      <div className="h-full md:h-[70%] lg:w-[60%] md:w-full flex flex-col md:flex-row bg-white shadow-2xl rounded-md">
        {/* Image container */}
        <div className="relative w-full h-1/3 md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" className="object-cover" fill />
        </div>
        {/* Form container */}
        <div className="h-2/3  w-full p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="text-xl font-bold">Welcome</h1>
          <p> Log into your account or create a new one using social buttons</p>
          <button
            className="flex p-2 gap-4 items-center ring-orange-100"
            onClick={() => signIn("google")}
          >
            <Image alt="" src="/google.png" width={20} height={20} />
            <span>Sign in with Google</span>
          </button>
          <button className="flex p-2 gap-4 items-center ring-blue-100 rounded-md">
            <Image alt="" src="/facebook.png" width={20} height={20} />
            <span>Sign in with Facebook </span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link href="" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
