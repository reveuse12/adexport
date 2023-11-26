// src/Testimonials.js
import React from "react";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Corporation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 2,
    name: "John Doe",
    company: "ABC Corporation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 3,
    name: "John Doe",
    company: "ABC Corporation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl underline decoration-pink-500 font-semibold text-center mb-6">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="max-w-sm mx-4 my-8 bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
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
