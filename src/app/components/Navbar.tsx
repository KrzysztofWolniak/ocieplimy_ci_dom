"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import DropdownComponent from "./DropdownComponent";
export default function NavbarComponent() {
  return (
    <header>
      <div
        className="w-full max-w-none p-0 mx-0 flex justify-center items-center h-24 relative"
        style={{ backgroundColor: "#1F1F1F" }}
      >
        <div className="w-full max-w-7xl px-12 ml-0 mr-0 flex justify-between items-center h-24">
          <Link href="/">
            <a className="w-52 px-5 ml-0 mr-0 flex justify-normal items-center h-24 text-white text-lg font-bold">
              OcieplimyCiDom
            </a>
          </Link>
          <nav className="block h-24 hidden lg:block">
            <ul className="flex items-center h-full">
              <li className="mx-4 flex items-center h-24 text-black">
                <Link href="/o-nas">
                  <a className="text-white text-sm font-bold">O nas</a>
                </Link>
              </li>
              <li className="mx-4 flex items-center h-24 text-black relative group">
                <Link href="/nasza-oferta">
                  <a className="text-white text-sm font-bold flex items-center">
                    Nasza oferta
                    <svg
                      className="w-6 h-6 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        fill="none"
                        points="5 8.5 12 15.5 19 8.5"
                        stroke="#FFFFFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </Link>
                <ul className="absolute top-24 left-0 bg-white z-10 p-6 hidden group-hover:block">
                  <li className="h-5">
                    <Link href="/nasza-oferta/ocieplanie-domu-z-wykorzystaniem">
                      <a className="text-black">
                        Ocieplanie domu z wykorzystaniem ekologicznych
                        materiałów
                      </a>
                    </Link>
                  </li>
                  <li className="h-5">
                    <Link href="/nasza-oferta/instalacja-ocieplenia-rockwool">
                      <a className="text-black">
                        Instalacja ocieplenia rockwool
                      </a>
                    </Link>
                  </li>
                  <li className="h-5">
                    <Link href="/nasza-oferta/metoda-nadmuchowa-ocieplenia">
                      <a className="text-black">Metoda nadmuchowa ocieplenia</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mx-4 flex items-center h-24 text-black">
                <Link href="/portfolio">
                  <a className="text-white text-sm font-bold">Portfolio</a>
                </Link>
              </li>
              <li className="mx-4 flex items-center h-24 text-black">
                <Link href="/blog">
                  <a className="text-white text-sm font-bold">Blog</a>
                </Link>
              </li>
              <li className="mx-4 flex items-center h-24 text-black">
                <Link href="/kontakt">
                  <a className="text-white text-sm font-bold">Kontakt</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center h-24 px-6">
            <div className="hidden lg:block ">
              <div className="ml-4 flex items-center w-full md:ml-6">
                <Link href="/call-to-action " className=" ">
                  <p className="w-40 px-5 py-3 text-center text-white bg-orange-600 flex space-x-4 font-medium rounded">
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
            <div className="lg:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:text-white"></button>
            </div>
          </div>
          <div className="hidden">
            <div className="block"></div>
            <p className="text-gray-500">MENU</p>
          </div>
        </div>
      </div>
    </header>
  );
}
