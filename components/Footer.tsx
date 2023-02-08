/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLogo } from '../lib/contentful';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { logo } = useLogo();

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container flex justify-between items-center my-14">
        <div className="flex items-center w-1/2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="flex w-1/2">
          <div className="w-1/2">
            <div className="font-medium pb-2">Tastebite</div>
            <Link href="/about">
              <div className="text-gray-500 hover:text-orange-600 mr-4 pb-2">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-500 hover:text-orange-600 mr-4 pb-2">
                Contact Us
              </div>
            </Link>
            <Link href="/feedback">
              <div className="text-gray-500 hover:text-orange-600 mr-4 pb-2">
                Feedback
              </div>
            </Link>
            <Link href="/careers">
              <div className="text-gray-500 hover:text-orange-600 pb-2">
                Careers
              </div>
            </Link>
          </div>
          <div className="w-1/2">
            <div className="font-medium pb-2">Follow</div>
            <Link href="#">
              <div className="text-gray-500 hover:text-orange-600 mr-4 pb-2">
                Facebook
              </div>
            </Link>
            <Link href="#">
              <div className="text-gray-500 hover:text-orange-600 mr-4 pb-2">
                Twitter
              </div>
            </Link>
            <Link href="#">
              <div className="text-gray-500 hover:text-orange-600 mr-4 pb-2">
                Instagram
              </div>
            </Link>
            <Link href="#">
              <div className="text-gray-500 hover:text-orange-600 pb-2">
                YouTube
              </div>
            </Link>
          </div>
        </div>
      </div>
      <hr className="container my-4 border-gray-500 opacity-50" />
      <div className="container flex justify-between items-center">
        <div className="text-gray-500">
          &copy; {currentYear} Tastebite - All rights reserved
        </div>
        <div className="flex">
          <a
            href="#"
            className="text-gray-500 hover:text-orange-600 mr-8 text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-orange-600 mr-8 text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-orange-600 mr-8 text-xl"
          >
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-600 text-xl">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
