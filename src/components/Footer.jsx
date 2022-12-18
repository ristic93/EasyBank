import React from "react";
import { Button } from "../common/Button";
import logo from "../assets/logo-light.svg";
import { data } from "../constants/data";

const Footer = () => {
  const icons = [...data];

  return (
    <footer className="bg-primary-darkBlue">
      <section className="flex flex-col items-center sm:flex-row justify-between container m-auto py-14">
        <div className="flex flex-col items-center mb-10 sm:mb-0">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex mt-10 space-x-3">
            {icons.map((icon) => {
              return (
                <a href="" key={icon.id}>
                  <img
                    src={icon.icon}
                    alt=""
                    onMouseOver={(e) => (e.currentTarget.src = icon.hoverIcon)}
                    onMouseOut={(e) => (e.currentTarget.src = icon.icon)}
                    width="25px"
                  />
                </a>
              );
            })}
          </ul>
        </div>
        <div className="text-center mb-3 sm:mb-0 sm:text-left">
          <ul className="space-y-3">
            <li className="text-neutral-lightGray hover:text-primary-limeGreen transition-all duration-300 cursor-pointer">
              About Us
            </li>
            <li className="text-neutral-lightGray hover:text-primary-limeGreen transition-all duration-300 cursor-pointer">
              Contact
            </li>
            <li className="text-neutral-lightGray hover:text-primary-limeGreen transition-all duration-300 cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <ul className="space-y-3">
            <li className="text-neutral-lightGray hover:text-primary-limeGreen transition-all duration-300 cursor-pointer">
              Careers
            </li>
            <li className="text-neutral-lightGray hover:text-primary-limeGreen transition-all duration-300 cursor-pointer">
              Support
            </li>
            <li className="text-neutral-lightGray hover:text-primary-limeGreen transition-all duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mt-6 sm:mt-0 sm:items-end space-y-8 ">
          <div>
            <Button />
          </div>
          <p className="text-primary-text">
            &copy;Easybank. All Rights Reserverd
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
