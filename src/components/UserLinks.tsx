"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React from "react";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-1 cursor-pointer" onClick={() => signOut()}>
            LOGOUT
          </span>
        </div>
      ) : (
        <Link href="/login">LOGIN</Link>
      )}
    </div>
  );
};

export default UserLinks;
