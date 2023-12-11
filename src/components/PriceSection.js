import React from "react";
import CustomContainer from "./layout/Container";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PriceSection = () => {
  return (
    <section className="bg-slate-900 py-32" id="price-section">
      <CustomContainer>
        <div>
          <h2 className="text-3xl tracking-tight text-white sm:text-4xl font-medium mb-4 text-center">
            Simple pricing, for everyone.
          </h2>
          <p className="text-lg tracking-tight text-slate-400 max-w-2xl mx-auto text-center">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3    mt-8 gap-6">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <figure className="min-h-[380px]  px-6 py-8 rounded-3xl flex justify-between flex-col gap-4 shadow-xl shadow-slate-900/10 hover:bg-blue-600 hover:text-white hover:scale-105 group transition-all duration-500 mx-auto">
                  <h3 className="text-white text-5xl  font-light tracking-tight mb-5">
                    $15
                  </h3>
                  <p className="text-lg text-white mb-2">Small business</p>
                  <p className="text-base tracking-tight text-slate-400 mb-5 group-hover:text-white">
                    Perfect for small / medium sized businesses.
                  </p>
                  <button className="ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white group-hover:ring-white active:ring-white active:text-black focus-visible:outline-white group-hover:bg-white group-hover:text-black font-medium transition-all duration-500">
                    Get started
                  </button>
                  <ul className="mt-5">
                    {Array.from({ length: 6 }).map((_, i) => {
                      return (
                        <li className="text-slate-200 flex gap-3 mb-4 group-hover:text-white active:text-white">
                          <IoIosCheckmarkCircleOutline className="h-6 w-6 text-slate-400 group-hover:text-white" />
                          <span className="group-hover:text-white">
                            Send 25 quotes and invoices
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </figure>
              );
            })}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default PriceSection;
