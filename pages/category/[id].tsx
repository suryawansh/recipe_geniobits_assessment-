/* eslint-disable @next/next/no-img-element */
import Typo from "@/components/Typo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecipes, useCategories } from "../../lib/contentful";

const CategoryDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<any>();
  const { recipes } = useRecipes();
  const { categories } = useCategories();

  useEffect(() => {
    if (categories) {
      const currentCategory = categories.find((r) => r?.sys?.id === id);
      setCategory(currentCategory);
    }
  }, [categories, id]);

  if (!categories || !category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <div
        className="bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url(${category.fields.image.fields.file.url})`,
          height: 720,
        }}
      >
        <div className="container bg-black opacity-80 absolute bottom-0 left-0 right-0  rounded-t-xl">
          <Typo
            fontFamily="Playfair Display"
            className="text-5xl font-medium py-9 px-5 opacity-100"
          >
            {category.fields.title}
          </Typo>
          <p className="text-white text-xl py-9 px-5 opacity-100">
            {category?.fields?.description}
          </p>
        </div>
      </div>
      <Typo
        fontFamily="Playfair Display"
        className="text-4xl font-bold my-8 container"
      >
        Recipes
      </Typo>
      <div className="grid grid-cols-4 gap-4 container">
        {recipes
          .filter((recipe: any) => recipe.fields.category?.sys.id === id)
          .map((recipe: any) => {
            return (
              <div
                className=" p-4 text-black hover:text-orange-600"
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
            );
          })}
      </div>
    </div>
  );
};

export default CategoryDetail;
