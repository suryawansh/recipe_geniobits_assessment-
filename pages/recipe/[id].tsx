/* eslint-disable @next/next/no-img-element */
import LatestRecipes from "@/components/LatestRecipes";
import Typo from "@/components/Typo";
import { useRecipes } from "@/lib/contentful";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaPrint } from "react-icons/fa";

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState<any>();
  const { recipes } = useRecipes();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (recipes) {
      const currentRecipe = recipes.find((r) => r.sys.id === id);
      setRecipe(currentRecipe);
    }
  }, [recipes, id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleCheckbox = (e: any) => {
    const updatedIngredients = recipe.fields.ingredients.map(
      (ingredient: any) => {
        if (ingredient.fields.name === e.target.value) {
          return {
            ...ingredient,
            fields: { ...ingredient.fields, isChecked: e.target.checked },
          };
        }
        return ingredient;
      }
    );
    setRecipe({
      ...recipe,
      fields: { ...recipe.fields, ingredients: updatedIngredients },
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto recipe-detail">
      <Typo fontFamily="Playful Detail" className="text-7xl font-bold">
        {recipe.fields.title}
      </Typo>
      <div className="flex justify-between mt-4">
        <div>
          <Typo fontFamily="Playful Detail" className="text-2xl font-medium">
            {recipe.fields.category.fields.title}
          </Typo>
        </div>
        <div>
          {isFavorited ? (
            <FaHeart
              onClick={handleFavorite}
              className="text-orange-500 cursor-pointer text-xl"
            />
          ) : (
            <FaRegHeart
              onClick={handleFavorite}
              className="text-orange-500 cursor-pointer text-xl"
            />
          )}
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-black mt-4 mb-8 text-lg">
        {recipe.fields.description}
      </p>
      <img
        src={recipe.fields.image.fields.file.url}
        alt={recipe.fields.title}
        className="rounded-lg mx-auto w-full object-contain"
        style={{ height: 720 }}
      />
      <div className="flex my-8 text-sm font-normal">
        <div>
          <p>
            PREP TIME <br /> {recipe.fields.prepTIme} MIN
          </p>
        </div>
        <div className="mx-2">
          <p>|</p>
        </div>
        <div className="mx-2">
          <p>
            COOK TIME
            <br /> {recipe.fields.cookTime} MIN
          </p>
        </div>
        <div className="mx-2">
          <p>|</p>
        </div>
        <div className="mx-2">
          <p>
            SERVINGS
            <br /> {recipe.fields.servings} PEOPLE
          </p>
        </div>
        <div className="mx-2">
          <p>|</p>
        </div>
        <div className="mx-2">
          <FaPrint className="text-2xl cursor-pointer" onClick={handlePrint} />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-16">
      <div>
          <Typo fontFamily="Playful Details" className="text-3xl font-semibold">
            Ingredients
          </Typo>
          <ul className="text-lg p-4">
            {recipe.fields.ingredients.map((ingredient: any, index: number) => (
              <li key={index} className="flex items-center p-2">
                <input type="checkbox" className="w-6 h-6 rounded-full accent-orange-500" onClick={(e: any) => e.target.parentNode.classList.toggle('line-through')}/>
                <label className="ml-2">{ingredient}</label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typo fontFamily="Playful Details" className="text-3xl font-semibold">
            Instructions
          </Typo>
          <ol className="list-decimal text-lg p-4">
            {recipe.fields.instructions
              .match(/\d+\..*(?=\d*\.)/g)
              .map((s: any) => s.replace(/^\d+\.\s/, ""))
              .map((instruction: any, index: number) => (
                <li key={index} className="p-2">
                  {instruction}
                </li>
              ))}
          </ol>
        </div>
      </div>
      <div>
        <Typo fontFamily="Playful Details" className="text-5xl font-semibold mt-16 mb-5">Already made this?</Typo>
        <Link href={'/feedback'} className="bg-white text-black border border-black py-1.5 px-8 rounded-lg hover:bg-black hover:text-white font-medium">Share your feedback</Link>
      </div>
      <hr className="my-4 border-4 border-orange-500" />
      <div>
        <LatestRecipes title={"You might also like"} numOfItems={4} titleSize={"text-3xl"}/>
      </div>
    </div>
  );
};

export default RecipeDetail;
