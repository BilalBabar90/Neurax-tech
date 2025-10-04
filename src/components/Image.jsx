import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image1 from "../images/1.jpg";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.jpg";
import Image4 from "../images/4.jpg";
import Image5 from "../images/5.jpg";
import Image6 from "../images/6.jpg";
import Image7 from "../images/7.jpg";
import Image8 from "../images/8.jpg";

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // auto move
  );

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const slides = emblaApi.slideNodes();
    slides.forEach((slide, i) => {
      slide.classList.remove("scale-110", "opacity-100");
      slide.classList.add("scale-90", "opacity-70");
    });
    const selected = emblaApi.selectedScrollSnap();
    slides[selected].classList.add("scale-110", "opacity-100");
    slides[selected].classList.remove("scale-90", "opacity-70");
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden w-full max-w-5xl mx-auto pt-10" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div
            className="flex-[0_0_33%] px-3 transition-transform duration-500 ease-in-out"
            key={index}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl transform scale-90 opacity-70 transition-all duration-500 ease-in-out">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
