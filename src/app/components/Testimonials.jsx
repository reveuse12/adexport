// src/Testimonials.js
import React from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Automotive Excellence",
    company: "Michael Thompson, CEO, Accelerate Motors",
    text: "AD Export has been an invaluable partner in our automotive manufacturing journey. The precision and reliability of their CNC parts have significantly elevated the quality of our vehicles. Their commitment to excellence is evident in every component they deliver. Truly a trusted ally in the competitive world of automotive production.",
  },
  {
    id: 2,
    name: "Plumbing Precision",
    company: "David Anderson, President, AquaFlow Solutions",
    text: "Precision in water plumbing is non-negotiable, and AD Export consistently delivers. Their CNC parts have become the backbone of our plumbing systems, ensuring seamless functionality and durability. We rely on AD Export for precision engineering that surpasses industry standards.",
  },
  {
    id: 3,
    name: "Agricultural Reliability",
    company: "Sarah Rodriguez, Operations Manager, Harvest Dynamics",
    text: "In the agriculture industry, where machinery endurance is paramount, AD Export has been a game-changer for us. Their CNC parts withstand the harshest conditions, contributing to the reliability and longevity of our equipment. It's more than a business relationship; it's a partnership built on trust and exceptional performance.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl underline decoration-pink-500 font-semibold text-center mb-6">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="max-w-sm mx-4 my-8 bg-white rounded-lg overflow-hidden flex flex-col justify-between shadow-lg"
            >
              <div className="p-6 mt-4">
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
              <div className="p-6 bg-gray-200">
                <p className="text-gray-800 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
