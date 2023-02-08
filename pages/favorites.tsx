/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from 'next/link';
import { useRecipes } from '../lib/contentful';
import Typo from "@/components/Typo";

const Favorites = () => {
  const [sortBy, setSortBy] = useState("latest");
  const { recipes } = useRecipes();

  const handleSortChange = (e: any) => {
    setSortBy(e.target.value);
  };

  const handleSelectAll = () => {
    // code to select all recipes
  };

  const handleDeleteSelected = () => {
    // code to delete selected recipes
  };

  let sortedFavorites = [...recipes];
  if (sortBy === "latest") {
    sortedFavorites.sort((a, b) => b.sys.createdAt - a.sys.createdAt);
  } else {
    sortedFavorites.sort((a, b) => a.sys.createdAt - b.sys.createdAt);
  }

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="flex items-center">
          <i className="fas fa-heart text-red-500 mr-2" />
          <Typo fontFamily="Playfair Display" className="text-6xl font-bold mb-8">Favorites</Typo>
        </div>
        <div>
          <label>
            Sort by:
            <select value={sortBy} onChange={handleSortChange}>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </label>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mb-4">
        <div>{recipes.length} Recipes</div>
        <div>
          <button onClick={handleSelectAll}>Select All</button>
          <button onClick={handleDeleteSelected}>Delete Selected</button>
        </div>
      </div>
      <ul>
        {sortedFavorites.map((recipe: any) => (
          <li key={recipe.sys.id} className="flex items-center">
            <input
              type="checkbox"
              // onChange={() => handleSelect(recipe.sys.id)}
            />
            <img
              src={recipe.fields.image.fields.file.url}
              alt={recipe.fields.title}
              className="w-32 h-32 rounded-lg mr-4"
            />
            <div>
              <Link href="/recipe/[id]" as={`/recipe/${recipe.sys.id}`}>
                  <h3 className="font-medium text-lg">{recipe.fields.title}</h3>
              </Link>
              <p className="text-gray-600">{recipe.fields.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
