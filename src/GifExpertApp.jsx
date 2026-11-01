import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["dragon ball", "valorant"]);

  const onAddCategory = (newCategory) => {
    const exists = categories.some(
      (c) => c.toLowerCase() === newCategory.toLowerCase()
    );
    if (exists) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h3>App de gifs</h3>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}