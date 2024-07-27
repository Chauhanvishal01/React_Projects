import React from "react";

const Recipe = ({ title, category, area, image, ingredients }) => {
  return (
    <div className="recipe bg-white rounded-lg overflow-hidden shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-gray-700">Category: {category}</p>
      <p className="text-gray-700">Area: {area}</p>
      <h2 className="text-lg font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
