import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:24 flex justify-between items-center text-red-500 lg:px-20 xl:px-40">
      <Link href="/" className="font-bold text-xl">
        Massimo
      </Link>
      <p className="uppercase">&copy; All rights Reserved</p>
    </div>
  );
};

export default Footer;
