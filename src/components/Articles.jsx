import React from "react";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="bg-neutral-lightGray py-[140px]">
      <article className="container m-auto">
        <h2 className="text-4xl mb-10 text-center sm:text-left">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-full mx-auto">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={currency}
              alt="articles"
              className="w-full h-[200px] rounded-t"
            />
            <div className="px-5 py-10 bg-neutral-white rounded-b text-center sm:text-left">
              <p className="text-primary-text mb-3">By Claire Robinson</p>
              <h3 className="text-2xl mb-3 text-primary-darkBlue hover:text-primary-limeGreen transition-all">
                Receive money in any currency with no fees
              </h3>
              <p className="text-primary-text">
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={restaurant}
              alt="articles"
              className="w-full h-[200px] rounded-t"
            />
            <div className="px-5 py-10 bg-neutral-white rounded-b text-center sm:text-left">
              <p className="text-primary-text mb-3">By Wilson Hutton</p>
              <h3 className="text-2xl mb-3 text-primary-darkBlue hover:text-primary-limeGreen transition-all">
                Treat yourself without worrying about money
              </h3>
              <p className="text-primary-text">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={plane}
              alt="articles"
              className="w-full h-[200px] rounded-t"
            />
            <div className="px-5 py-10 bg-neutral-white rounded-b text-center sm:text-left">
              <p className="text-primary-text mb-3">By Wilson Hutton</p>
              <h3 className="text-2xl mb-3 text-primary-darkBlue hover:text-primary-limeGreen transition-all">
                Take your Easybank card wherever you go
              </h3>
              <p className="text-primary-text">
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show
                you...
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={confetti}
              alt="articles"
              className="w-full h-[200px] rounded-t"
            />
            <div className="px-5 py-10 bg-neutral-white rounded-b text-center sm:text-left">
              <p className="text-primary-text mb-3">By Claire Robinson</p>
              <h3 className="text-2xl mb-3 text-primary-darkBlue hover:text-primary-limeGreen transition-all">
                Our invite-only Beta accounts are now live!
              </h3>
              <p className="text-primary-text">
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site...
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Articles;
