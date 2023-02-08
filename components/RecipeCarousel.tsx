import { useRecipes } from "../lib/contentful";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Typo from "./Typo";

const RecipeCarousel = () => {
  const { recipes } = useRecipes();

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {recipes.map((recipe) => (
        <div
          key={recipe.sys.id}
          className="w-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${recipe.fields.image.fields.file.url})`,
            height: "50rem",
          }}
        >
          <div className="absolute bottom-16 left-0 right-0 p-4 text-white text-7xl container font-bold">
            <Link href={`/recipe/${recipe.sys.id}`} target="_blank">
              <Typo fontFamily={"Playfair Display"}>{recipe.fields.title}</Typo>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
