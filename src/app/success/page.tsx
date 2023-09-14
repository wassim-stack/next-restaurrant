"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.API_URL : "http://localhost:3000";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`${apiUrl}/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [payment_intent, router]);

  return <div>page</div>;
};

export default SuccessPage;
