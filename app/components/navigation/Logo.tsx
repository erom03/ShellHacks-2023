"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <div className="flex justify-start items-center gap-x-6 text-white">
        <Image
          src="/images/LogoWhite.png"
          alt="Logo"
          title="How Much Car"
          width={50}
          height={50}
          className="relative"
          /> How Much Car
      </div>

      <div
        style={{
          display: showButton ? "block" : "none",
        }}
        >
      </div>
    </>
  );
};

export default Logo;