import React, { useState } from "react";
import CustomContainer from "./layout/Container";

const services = [
  {
    id: 1,
    title: "Payroll",
  },
  {
    id: 2,
    title: "Claim expenses",
  },
  {
    id: 3,
    title: "VAT handling",
  },
  {
    id: 4,
    title: "Reporting",
  },
];

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(1);

  return (
    <section className="py-32 relative z-50 bg-blue-600" id="features-section">
      <CustomContainer>
        <div>
          <h1 className="text-3xl tracking-tight text-white sm:text-4xl   md:text-5xl text-center mb-6">
            Everything you need to run your books.
          </h1>
          <p className="text-lg tracking-tight text-white text-center">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p>
        </div>
      </CustomContainer>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 bg-white/10 lg:bg-blue-600 mx-6 rounded-2xl">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1  xl:grid-cols-3">
            <div className="hidden xl:block"></div>
            <div className="col-span-2  hidden lg:block  md:pt-20 py-10 flex justify-center items-center gap-x-16 ">
              {services.map((service, i) => {
                return (
                  <div
                    className={`rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6  cursor-pointer ${
                      activeService === service.id
                        ? " bg-white/10 ring-1 ring-inset ring-white/10"
                        : " hover:bg-white/10 hover:ring-1 hover:ring-inset hover:ring-white/10"
                    }`}
                    onClick={() => setActiveService(service.id)}
                  >
                    <h3 className="text-lg text-blue-100 hover:text-white lg:text-white font-semibold">
                      {service.title}
                    </h3>
                    <p className="hidden text-sm lg:block text-blue-100 group-hover:text-white">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:hidden block lg:pl-72 md:pt-20 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {services.map((service, i) => {
              return (
                <div
                  className={`rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6  cursor-pointer mx-auto mb-5 ${
                    activeService === service.id
                      ? "bg-white "
                      : " hover:bg-white"
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <h3
                    className={`text-lg  font-semibold ${
                      activeService === service.id
                        ? "text-blue-700"
                        : "text-blue-100"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="hidden text-sm lg:block text-blue-100 group-hover:text-white">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              );
            })}
          </div>
          <p className="lg:hidden block  text-sm  mx-auto max-w-2xl px-4  sm:px-0  text-white sm:text-center mb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="md:col-span-3 rounded-xl">
          <div className="h-full">
            {activeService === 1 ? (
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
              />
            ) : activeService === 2 ? (
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
                s
              />
            ) : activeService === 3 ? (
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
              />
            ) : (
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
      {/* <img
        src="https://salient.tailwindui.com/_next/static/media/background-features.5f7a9ac9.jpg"
        alt="gradien-img"
        className="absolute bottom-0 left-0 -z-10 object-cover"
      /> */}
    </section>
  );
};

export default ServiceSection;
