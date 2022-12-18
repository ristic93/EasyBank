import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { NavButton } from "../common/NavButton";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-neutral-white fixed z-50 w-full">
      <article className="flex justify-between items-center container m-auto py-6">
        <div>
          <img src={logo} alt="logo" className="cursor-pointer" />
        </div>

        <ul className="hidden sm:flex sm:justify-between items-center space-x-10">
          <li>
            <a
              href="#"
              className="hover:border-b-[6px] border-primary-limeGreen transition-all text-primary-text hover:text-primary-darkBlue font-[500] pb-8"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-[6px] border-primary-limeGreen transition-all text-primary-text hover:text-primary-darkBlue font-[500] pb-8"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-[6px] border-primary-limeGreen transition-all text-primary-text hover:text-primary-darkBlue font-[500] pb-8"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-[6px] border-primary-limeGreen transition-all text-primary-text hover:text-primary-darkBlue font-[500] pb-8"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-[6px] border-primary-limeGreen transition-all text-primary-text hover:text-primary-darkBlue font-[500] pb-8"
            >
              Careers
            </a>
          </li>
        </ul>

        <img
          src={`${toggle ? close : menu}`}
          alt="hamburger"
          onClick={() => setToggle((prev) => !prev)}
          className="sm:hidden"
        />

        <ul
          className={`${
            toggle ? "flex flex-col" : "hidden"
          } text-center absolute bg-neutral-white top-[80px] left-2 right-2 py-5 space-y-6 rounded-md sm:hidden `}
        >
          <li>
            <a href="#" className="hover:text-primary-limeGreen transition-all">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-limeGreen transition-all">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-limeGreen transition-all">Contact</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-limeGreen transition-all">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-limeGreen transition-all">Careers</a>
          </li>
        </ul>

        <NavButton />
      </article>
    </nav>
  );
};

export default Navbar;
