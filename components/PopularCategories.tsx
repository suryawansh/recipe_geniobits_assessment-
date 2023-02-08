/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useCategories } from '../lib/contentful';
import Typo from "./Typo";
import { useState, useEffect } from 'react';

const PopularCategories = () => {
  const { categories } = useCategories();
  const [popularCategories, setPopularCategories] = useState<any>();

  useEffect(() => {
    setPopularCategories(categories.filter((category) => category.fields.popular === true))
  }, [categories])

  return (
    <div className="my-8 container">
      <Typo fontFamily="Playfair Display" className="text-4xl font-bold my-8">
        Popular Categories
      </Typo>
      <div className="flex flex-wrap justify-center">
        {popularCategories && popularCategories.slice(0, 6).map((category: any) => (
          <div key={category.sys.id} className="p-4 hover:text-orange-600">
            <Link href="/category/[id]" as={`/category/${category.sys.id}`}>
              <div className="relative rounded-full overflow-hidden">
                <img
                  className="w-40 h-40 object-cover hover:scale-110"
                  src={category.fields.image.fields.file.url}
                  alt={category.fields.title}
                  style={{transition: "0.2s all ease-in-out"}}
                />
              </div>
              <div className="mt-2 text-center text-lg font-semibold">
                {category.fields.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
