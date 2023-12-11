import React from "react";

const featuedList = [
  {
    id: 1,
    img: "https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg",
  },
  {
    id: 2,
    img: "https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg",
  },
  {
    id: 3,
    img: "https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg",
  },
  {
    id: 4,
    img: "https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg",
  },
  {
    id: 5,
    img: "https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg",
  },
  {
    id: 6,
    img: "https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg",
  },
];

const FeaturedSection = () => {
  return (
    <section className="text-center">
      <p className="font-medium">Trusted by these six companies so far</p>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-8 gap-y-8">
        {featuedList.map((feature, i) => {
          return (
            <div className="mx-auto" key={feature.id}>
              <img src={feature.img} alt="featured-img" className="h-42 w-30" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedSection;
