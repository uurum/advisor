import Image from "next/image";
import logo from "@/assets/images/logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-center bg-white ">
      <div className="max-w-6xl ">
        <div className="flex items-center text-white bg-purple-800 justify-between p-2 max-md:flex-col">
          <span className={styles.head + " whitespace-nowrap px-8"}>
            We have over 15 years of experience
          </span>
          <div className="flex items-center justify-around w-full">
            <Link href="" className="flex gap-2 items-center">
              <i className="pi pi-phone !text-2xl"></i>
              506 123 45 67
            </Link>
            <Link href="" className="flex gap-2 items-center">
              <i className="pi pi-map-marker"></i>
              Kocaeli
            </Link>
            <Link href="" className="flex gap-2 items-center">
              <i className="pi pi-stopwatch"></i>
              08:00 - 17:00
            </Link>
          </div>
        </div>

        <div className="container mx-auto flex p-4 justify-between items-center max-md:flex-col">
          <Image src={logo} alt="logo" />

          <div className=" md:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none">
            <i className="pi pi-align-left" style={{ fontSize: '2rem' }}></i>
            </button>
          </div>

          <div className={`flex  ${isOpen ? "block" : "hidden"} md:block`}>
            <div className=" p-2 bg-white items-center   ">
            
              <nav className="flex items-center  max-md:flex-col gap-8 max-md:gap-2">
                <Link
                  className=" hover:border-green-600 border-b-white border-b-4 p-2"
                  href="/about"
                >
                  About Us
                </Link>
                <Link
                  className=" hover:border-green-600 border-b-white border-b-4 p-2"
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  className=" hover:border-green-600 border-b-white border-b-4 p-2"
                  href="/financial"
                >
                  Financial
                </Link>
                <Link
                  className=" hover:border-green-600 border-b-white border-b-4 p-2"
                  href="/contact"
                >
                  İletişim
                </Link>
              </nav>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
