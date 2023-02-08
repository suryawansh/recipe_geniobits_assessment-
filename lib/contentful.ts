import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "s11lro6hn87h",
  accessToken: "RazxCxrsnUsYU9yZ8628Fo0oUqtZOoWjMn5p2KJN4EA",
});

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loadingRecipes, setLoadingRecipes] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "recipe",
      })
      .then((response: any) => {
        setRecipes(response.items);
        setLoadingRecipes(false);
      });
  }, []);

  return { recipes, loadingRecipes };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "category",
      })
      .then((response: any) => {
        setCategories(response.items);
        setLoadingCategories(false);
      });
  }, []);

  return { categories, loadingCategories };
};

export const useCareers = () => {
  const [careers, setCareers] = useState<any[]>([]);
  const [loadingCareers, setLoadingCareers] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "career",
      })
      .then((response: any) => {
        setCareers(response.items);
        setLoadingCareers(false);
      });
  }, []);

  return { careers, loadingCareers };
};

export const useLogo = () => {
  const [logo, setLogo] = useState<string>();

  useEffect(() => {
    client.getAsset("2L6leRWVJdnVekF5eGwYXr").then((asset) => {
      setLogo(asset.fields.file.url);
    });
  }, []);

  return { logo };
};
