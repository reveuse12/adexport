"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "/pdimg/p1.jpg",
  "/pdimg/p2.jpg",
  "/pdimg/p3.jpg",
  "/pdimg/p4.jpg",
  "/pdimg/p5.jpg",
  "/pdimg/p6.jpg",
  "/pdimg/product1.png",
  "/pdimg/product2.png",
  "/pdimg/product3.png",
  "/pdimg/product4.png",
  "/pdimg/product5.png",
  "/pdimg/product6.png",
  "/pdimg/product7.png",
  "/pdimg/product8.png",
];

const Agriculture = [
  "/agriparts/1.png",
  "/agriparts/2.png",
  "/agriparts/3.png",
  "/agriparts/4.png",
  "/agriparts/5.png",
  "/agriparts/6.png",
];

const Automotive = [
  "/auto-parts/7.png",
  "/auto-parts/8.png",
  "/auto-parts/9.png",
];

const WaterPump = [
  "/waterparts/15.png",
  "/waterparts/16.png",
  "/waterparts/17.png",
  "/waterparts/18.png",
  "/waterparts/19.png",
  "/waterparts/20.png",
  "/waterparts/21.png",
];

const Industrial = ["/industrial-valve/10.png", "/industrial-valve/11.png"];

const Plumbing = ["/plumbing/12.png", "/plumbing/13.png", "/plumbing/14.png"];

const categories = [
  "All",
  "Agriculture",
  "Automotive",
  "WaterPump",
  "Industrial",
  "Plumbing",
];

const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCategoryImages = (category) => {
    switch (category) {
      case "All":
        return images;
      case "Agriculture":
        return Agriculture;
      case "Automotive":
        return Automotive;
      case "WaterPump":
        return WaterPump;
      case "Industrial":
        return Industrial;
      case "Plumbing":
        return Plumbing;
      default:
        return images;
    }
  };

  const filteredImages = getCategoryImages(selectedCategory);

  return (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`${
              category === selectedCategory
                ? "text-white border border-[#0f2b7f] bg-[#0f2b7f] focus:ring-4 focus:outline-none "
                : "text-gray-900 border hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black focus:ring-4 "
            } rounded-full text-base shadow-xl font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 sm:mb-0`}
          >
            {category} Categories
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              width={800}
              height={500}
              loading="lazy"
              alt={`Product Image ${index + 1}`}
              className="h-auto max-w-full shadow-2xl rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGallery;
