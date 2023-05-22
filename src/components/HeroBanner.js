import React from "react";
function HeroBanner() {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex items-center">
        <div className="w-[60vw] ml-16">
          <h1 className="font-font2 text-7xl font-extrabold">
            Edit Your Photo <span className="text-emerald-500">With AI.</span>
          </h1>
          <p className="py-6 text-2xl">
            TypeTweak's photo editor lets you edit photos in just a few clicks.
            It covers various free online photo editing tools, so you can
            generate images from text, restore old photos, edit photos using
            prompts and make your photos beautiful with the AI face makeover.
          </p>
          <a
            className="py-3 px-6 my-6 inline-block hover:scale-105 hover:shadow-lg hover:shadow-orange-300 transition-all rounded-lg text-2xl bg-gradient-to-tr from-amber-600 to-red-400"
            href="/signin"
          >
            Get Started &rarr;
          </a>
        </div>
        <div className="w-[40vw] h-[65vh] bg-hero bg-center bg-cover mr-4 shadow-lg shadow-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
}

export default HeroBanner;
