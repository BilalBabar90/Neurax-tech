import React from "react";

import Image1 from "../images/1.jpg";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.jpg";
import Image4 from "../images/4.jpg";
import Image5 from "../images/5.jpg";
import Image6 from "../images/6.jpg";
import Image7 from "../images/7.jpg";
import Image8 from "../images/8.jpg";

const ImageCarouselMarquee = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-background">
      {/* Smoky blur edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-background via-background/80 to-transparent z-10 blur-[30px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-background via-background/80 to-transparent z-10 blur-[30px]" />

      {/* Scrolling content */}
      <div className="flex w-max animate-scroll">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-[30vw] md:w-[20vw] lg:w-[15vw] px-3"
          >
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="object-cover"
                style={{ width: "600px", height: "400px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselMarquee;
