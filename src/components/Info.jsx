import React from "react";
import banking from "../assets/icon-online.svg";
import budgeting from "../assets/icon-budgeting.svg";
import onboarding from "../assets/icon-onboarding.svg";
import api from "../assets/icon-api.svg";

const Info = () => {
  return (
    <section className="bg-neutral-lightBlue">
      <article className="container m-auto text-center py-[80px] sm:text-left sm:py-[140px]">
        <h2 className="text-4xl mb-10 text-primary-darkBlue">
          Why chose EasyBank?
        </h2>
        <p className="text-primary-text mb-16">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br /> Control your finances like never before.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-full mx-auto">
          <div className="flex flex-col items-center sm:items-start">
            <img src={banking} alt="info" className="w-20"/>
            <h3 className="text-2xl text-primary-darkBlue my-6">
              Online Banking
            </h3>
            <p className="text-primary-text">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <img src={budgeting} alt="info" className="w-20"/>
            <h3 className="text-2xl text-primary-darkBlue my-6">
              Simple Budgeting
            </h3>
            <p className="text-primary-text">
              See exactly where your money goes each month. Receive
              notifications when you're close to hittin your limits.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <img src={onboarding} alt="info" className="w-20"/>
            <h3 className="text-2xl text-primary-darkBlue my-6">
              Fast Onboarding
            </h3>
            <p className="text-primary-text">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <img src={api} alt="info" className="w-20"/>
            <h3 className="text-2xl text-primary-darkBlue my-6">Open API</h3>
            <p className="text-primary-text">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Info;
