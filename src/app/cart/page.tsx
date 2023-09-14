"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.API_URL : "http://localhost:3000";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/");
    } else {
      try {
        const res = await fetch(`${apiUrl}/api/orders`, {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/pay/${data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row   text-red-500 ">
      {/* Product container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 xl:w-1/2 lg:px-20 xl:px-40 ">
        {/* Single Product */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4 ">
            {/* Image container */}
            {item.img && (
              <Image
                src="/temporary/p1.png"
                width={100}
                height={100}
                alt=""
                className=""
              />
            )}
            {/* Desc */}
            <div className="">
              <h1 className="font-bold text-xl uppercase">
                {item.title} X{item.quantity}
              </h1>
              <p>{item.optionTitle}</p>
            </div>
            {/* Price */}
            <h2 className="font-bold">{item.price}</h2>
            {/* Close Button */}
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* Payment container */}
      <div className=" h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4  justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex  justify-between">
          <p className="">Subtotal({totalItems} items)</p>
          <p className="">{totalPrice} DT</p>
        </div>
        <div className="flex  justify-between">
          <p className="">Service Cost</p>
          <p className="">0.00 DT</p>
        </div>
        <div className="flex  justify-between">
          <p className="">Delivery cost</p>
          <p className="text-green-500">Free!</p>
        </div>
        <hr className="my-2" />
        <div className="flex items-center justify-between">
          <p className="">Delivery cost</p>
          <p className="">Free!</p>
        </div>
        <button
          className="w-1/2 bg-red-500 px-5 py-2 text-white uppercase rounded-md self-end"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
