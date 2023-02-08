/* eslint-disable @next/next/no-img-element */
import Typo from "@/components/Typo";
import Link from "next/link";
import { useCategories } from '../lib/contentful';

const Categories = () => {
  const { categories } = useCategories();

  if (!categories.length) return <p>Loading...</p>;

  return (
    <div className="container my-8">
      <Typo fontFamily="Playfair Display" className="text-6xl font-bold my-3">
        Categories
      </Typo>
      <hr />
      <div className="grid grid-cols-4 gap-4 my-8">
        {categories.map((category) => (
          <div key={category.sys.id} className="p-4 hover:text-orange-600">
            <Link href="/category/[id]" as={`/category/${category.sys.id}`}>
              <div className="relative rounded-full overflow-hidden">
                <img
                  className="w-40 h-40 object-cover hover:scale-110"
                  src={category.fields.image.fields.file.url}
                  alt={category.fields.title}
                  style={{ transition: "0.2s all ease-in-out" }}
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

export default Categories;
