import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="sticky shadow-md NavBar">
        <div className="container mx-auto px-1vw h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
            <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;