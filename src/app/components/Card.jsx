import React from "react";

const Card = ({ title, content, index }) => {
  const bgColors = ["bg-blue-100", "bg-blue-300"];
  const bgColorIndex = index % bgColors.length;
  return (
    <div
      className={`rounded-lg shadow-md p-6 m-4 w-full md:w-1/2 ${bgColors[bgColorIndex]}`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
