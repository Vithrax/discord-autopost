import { Alumni_Sans_Collegiate_One } from "next/font/google";
import Link from "next/link";
import React from "react";

const font = Alumni_Sans_Collegiate_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alumini",
});

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className={`font-logo ${font.variable} text-center text-4xl`}>
        Discord
      </span>
      <div className="flex flex-col items-center justify-center text-sm uppercase leading-3 tracking-tighter">
        <span>auto</span>
        <span>post</span>
      </div>
    </Link>
  );
};

export default Logo;
