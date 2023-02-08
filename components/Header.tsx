/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import SubHeader from "./SubHeader";
import { useLogo } from "../lib/contentful";
import { useRouter } from "next/router";

const Header = () => {
  const { logo } = useLogo();
  const router = useRouter();

  return (
    <div className="pb-10">
      <SubHeader />
      <header className="flex flex-col items-center p-4">
        <Link href="/">
          <img src={logo} alt="Logo" className="w-44 m-6" />
        </Link>
        <nav className="flex flex-row items-center justify-center">
        <Link href="/">
            <div
              className={`mx-4 text-black hover:text-orange-600 cursor-pointer ${
                router.asPath === "/" ? "font-bold" : "font-medium"
              }`}
            >
              Home
            </div>
          </Link>
          <Link href="/categories">
            <div
              className={`mx-4 text-black hover:text-orange-600 cursor-pointer ${
                router.asPath === "/categories" ? "font-bold" : "font-medium"
              }`}
            >
              Categories
            </div>
          </Link>
          <Link href="/favorites">
            <div
              className={`mx-4 text-black hover:text-orange-600 cursor-pointer ${
                router.asPath === "/favorites" ? "font-bold" : "font-medium"
              }`}
            >
              Favorites
            </div>
          </Link>
          <Link href="/profile">
            <div
              className={`mx-4 text-black hover:text-orange-600 cursor-pointer ${
                router.asPath === "/profile" ? "font-bold" : "font-medium"
              }`}
            >
              Profile
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`mx-4 text-black hover:text-orange-600 cursor-pointer ${
                router.asPath === "/about" ? "font-bold" : "font-medium"
              }`}
            >
              About
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
