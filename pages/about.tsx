import Typo from "@/components/Typo";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-16">
      <Typo fontFamily="Playfair Display" className="text-6xl font-bold mb-8">About Us</Typo>
      <p>
        We are a team of passionate foodies who love to create and share
        delicious recipes with the world. We believe that cooking and eating
        together is one of life&apos;s greatest pleasures and we want to make it
        easy for people to do that. Our goal is to provide you with a wide
        variety of recipes, from classic comfort foods to new and exciting
        dishes, all made with fresh, whole ingredients.
      </p>
      <p>
        We hope that our recipes will inspire you to get into the kitchen and
        start cooking. Whether you&apos;re a seasoned pro or just starting out,
        we want to be your go-to source for all things food. So come on in, grab
        a recipe and let&apos;s start cooking together!
      </p>
    </div>
  );
};
export default About;
