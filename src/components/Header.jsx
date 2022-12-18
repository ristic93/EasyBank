import React from "react";
import { Button } from "../common/Button";
import heroImg from "../assets/image-mockups.png";

const Header = () => {
  return (
    <header className="bg-neutral-lightGray">
      <article className="container m-auto space-x-4">
        <div className="text-wrapper pt-[500px] pb-[60px] text-center max-w-xl sm:text-left sm:py-[140px]">
          <h1 className="text-5xl leading-[60px] text-primary-darkBlue mb-10">
            Next generation <br /> digital banking
          </h1>
          <p className="text-primary-text mb-10">
            Take your financial life online. Your Easybank account <br /> will
            one-stop-shop for spending, saving, budgeting, <br /> investing, and much
            more.
          </p>
          <Button />
        </div>
        <div className="header">
          <img
            src={heroImg}
            alt=""
            className="absolute -top-[20px] -right-0"
          />
        </div>
      </article>
    </header>
  );
};

export default Header;
