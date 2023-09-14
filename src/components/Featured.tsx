import Image from "next/image";
import React from "react";
import { ProductType } from "@/types/types";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.API_URL : "http://localhost:3000";

const GetData = async () => {
  const res = await fetch(`${apiUrl}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

const Featured = async () => {
  const featuredProducts: ProductType[] = await GetData();
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh]  items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8 text-center">{item.desc}</p>
              <span className="text-xl font-bold">{item.price} DT</span>
              <button className="bg-red-500 text-white rounded-md p-2">
                add to card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
