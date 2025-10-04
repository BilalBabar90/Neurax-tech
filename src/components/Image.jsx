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
    <div className="w-full overflow-hidden pt-10">
      {/* ✅ Only 3 images visible at a time using width control */}
      <marquee behavior="scroll" direction="left" scrollamount="7">
        <div className="flex w-max">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[33.33vw] px-3"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default ImageCarouselMarquee;
