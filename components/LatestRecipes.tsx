/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useRecipes } from "../lib/contentful";
import Typo from "./Typo";
import { useState, useEffect } from "react";


const LatestRecipes = (props: any) => {
  const {title, numberOfItems, titleSize} = props;
  const { recipes } = useRecipes();
  const [visibleRecipes, setVisibleRecipes] = useState<any[]>();
  const [hasMore, setHasMore] = useState(false);
  
  useEffect(() => {
    recipes.reverse();
    setVisibleRecipes(recipes.slice(0, numberOfItems));
    if (recipes.length > numberOfItems) setHasMore(true);
  }, [numberOfItems, recipes]);

  const handleLoadMore = () => {
    setVisibleRecipes(recipes);
    setHasMore(false);
  };

  return (
    <div className="my-8 container">
      <Typo fontFamily="Playfair Display" className={`${titleSize ? titleSize : 'text-4xl'} font-bold my-8`}>
        {title}
      </Typo>
      <div className="flex flex-wrap">
        {visibleRecipes?.map((recipe) => (
          <div
            className="w-1/4 p-4 text-black hover:text-orange-600"
            key={recipe.sys.id}
          >
            <Link href={`/recipe/${recipe.sys.id}`}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={recipe.fields.image.fields.file.url}
                  alt={recipe.fields.title}
                  className="rounded-lg h-60 w-60 object-cover hover:scale-110"
                  style={{ transition: "0.2s all ease-in-out" }}
                />
              </div>
              <div className=" text-lg font-medium block pt-2">
                {recipe.fields.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-4">
          <button
            className="bg-white text-black border border-black py-1.5 px-8 rounded-lg hover:bg-black hover:text-white font-medium"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestRecipes;
