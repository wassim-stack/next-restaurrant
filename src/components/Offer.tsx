import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen  flex flex-col md:flex-row  md:justify-between md:bg-[url('/offerBg.png')] md:h-70vh">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center text-center justify-center gap-8 p-6">
        {/* TITLE */}
        <h1 className="capitalize  text-white  text-5xl lg:text-6xl font-bold">
          delicous burger & french fry
        </h1>
        {/* DESC */}
        <p className="text-white xl:text-xl ">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        {/* COUNTER */}
        <CountDown />
        {/* ORDER NOW */}
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order NOw
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
