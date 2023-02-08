import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCarousel from "@/components/RecipeCarousel";
import PopularCategories from "@/components/PopularCategories";
import Newsletter from "@/components/Newsletter";
import LatestRecipes from "@/components/LatestRecipes";

const HomePage = () => {
  return (
    <div>
      <RecipeCarousel />
      <PopularCategories />
      <LatestRecipes title="Latest Recipes" numOfItems={24}/>
      <Newsletter />
    </div>
  );
};

export default HomePage;
