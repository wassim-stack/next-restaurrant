import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const NavBar = () => {
  const user = false;
  return (
    <div className="h-12 md:h-24 px-4 lg:px-20 xl:px-40 flex justify-between items-center text-red-500 border-b border-red-500 uppercase">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/homepage">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <div className="flex items-center px-1 bg-orange-300 cursor-pointer rounded-md gap-2 md:absolute top-3 right-2 ">
          <Image src="/phone.png" alt=" " width={20} height={20} />
          <span>22 333 444</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default NavBar;
