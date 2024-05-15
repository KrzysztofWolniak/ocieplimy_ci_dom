"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import DropdownComponent from "./DropdownComponent";
export default function NavbarComponent() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center w-full ">
            <Link href="/">
              <p className="text-xl text-center font-bold text-blue-600">
                Ocieplimy Ci Dom
              </p>
            </Link>
            <div className="hidden md:flex ml-10 space-x-4 w-full flex justify-end">
              <Link href="/services">
                <p className="text-gray-700 hover:text-blue-600">Services</p>
              </Link>
              <Link href="/testimonials">
                <p className="text-gray-700 hover:text-blue-600">
                  Testimonials
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-700 hover:text-blue-600">Contact</p>
              </Link>
            </div>
          </div>
          <div className="hidden md:block ">
            <div className="ml-4 flex items-center w-full md:ml-6">
              <Link href="/call-to-action " className=" space-x-4">
                <p className="rounded-full px-4 py-2 bg-blue-600 text-white w-full no-wrap flex  hover:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 me-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  Rezerwacja
                </p>
              </Link>
            </div>
          </div>
          <DropdownComponent />
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:text-white">
              
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
