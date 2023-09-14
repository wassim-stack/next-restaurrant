import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.API_URL : "http://localhost:3000";

const GetData = async (category: string) => {
  const res = await fetch(`${apiUrl}/api/products?cat=${category}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await GetData(params.category);
  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="group w-full sm:w-1/2 lg:1/3 h-[60vh] flex flex-col justify-between border-r-2 border-b-2 border-red-500 p-4 even:bg-fuchsia-50"
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain " />
            </div>
          )}
          {/* TEXT CINTAINER */}
          <div className="flex  items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">{item.price} DT</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
