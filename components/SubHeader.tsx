/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSearch, BsXLg } from "react-icons/bs";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const SubHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, error, isLoading } = useUser();

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-gray-100">
      <div className="container flex justify-between items-center p-4">
        <div className="flex">
          <a href="#" className="text-black hover:text-orange-600 mx-4 text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-black hover:text-orange-600 mx-4 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-black hover:text-orange-600 mx-4 text-xl">
            <FaInstagram />
          </a>
        </div>
        <div className="flex">
          <div
            className={`${
              isSearchOpen ? "block" : "hidden"
            } inset-0 z-50 mx-auto w-80`}
          >
            <div className="relative">
              <input
                className="w-full rounded-lg p-2 h-auto"
                type="text"
                placeholder="Search"
              />
              <button
                onClick={handleSearchClose}
                className="absolute right-1 top-1 p-2"
              >
                <BsXLg />
              </button>
            </div>
          </div>
          <button
            onClick={handleSearchOpen}
            className="text-black hover:text-orange-600 mx-4"
          >
            <BsSearch />
          </button>
          {!user && (
            <Link
              href="/api/auth/login"
              className="text-black hover:text-orange-600 mx-4"
            >
              Login
            </Link>
          )}
          {user && user.picture && user.name && (
            <div className="user-avatar relative z-10">
              <img
                src={user.picture}
                alt={user.name}
                className="rounded-full cursor-pointer w-8 ml-4"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              <div
                className={`dropdown-menu absolute bg-white shadow ${
                  showDropdown ? "block" : "hidden"
                }`}
              >
                <ul className="p-2">
                  <li>
                    <Link href="/profile" className="py-2 hover:text-orange-500">Profile</Link>
                  </li>
                  <li>
                    <Link href="/api/auth/logout" className="py-2 hover:text-orange-500">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
