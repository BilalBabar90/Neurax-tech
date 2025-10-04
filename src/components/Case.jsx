import React from "react";
import Image1 from "../images/1.jpg";

const Case = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row items-center overflow-hidden max-w-6xl mx-auto my-12">
      {/* Left Section - Image */}
      <div className="w-full lg:w-1/2 h-[380px]">
        <img
          src={Image1}
          alt="Case Study"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full lg:w-1/2 px-8 py-10">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">
            H
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Hopstack</h2>
        </div>

        {/* Heading */}
        <h1 className="text-2xl lg:text-3xl font-bold leading-snug text-gray-900 mb-4">
          Increase In Organic Traffic by 266.4% with new revamped webflow
          website. DA increased from 24 to 37 in 6 months.
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["B2B SaaS", "Logistics", "Fulfillment"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Funding Info */}
        <div className="border-t pt-6">
          <div className="flex items-end gap-2">
            <h2 className="text-4xl font-bold text-gray-900">$2.7M</h2>
            <p className="text-lg text-gray-600 mb-1">in funding</p>
          </div>

          <div className="flex flex-wrap gap-2 text-gray-700 mt-3">
            <span>UI/UX Design</span>
            <span className="text-gray-500">•</span>
            <span>Webflow</span>
            <span className="text-gray-500">•</span>
            <span>SEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
