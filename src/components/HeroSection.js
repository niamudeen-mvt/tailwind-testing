import React from "react";
import { CustomButton, TransaprentButton } from "./shared/Button";
import CustomContainer from "./layout/Container";
import FeaturedSection from "./FeaturedSection";

const HeroSection = () => {
  return (
    <main>
      <CustomContainer>
        <section className="md:py-20">
          <div className="text-center flex flex-col gap-y-8 pt-32 pb-24">
            <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-slate-900 sm:text-7xl">
              Accounting <span className="text-blue-600">made simple</span> for
              small businesses.
            </h1>
            <p className="text-lg tracking-tight text-slate-700 max-w-2xl mx-auto">
              Most bookkeeping software is accurate, but hard to use. We make
              the opposite trade-off, and hope you dont get audited.
            </p>
            <div className="flex justify-center gap-x-6">
              <CustomButton
                text="Get 6 months free"
                btnColor="bg-black"
                hoverColor="bg-slate-500"
                activeTextColor="text-slate-100"
              />
              <TransaprentButton text="Watch Video" />
            </div>
          </div>
          <FeaturedSection />
        </section>
      </CustomContainer>
    </main>
  );
};

export default HeroSection;
