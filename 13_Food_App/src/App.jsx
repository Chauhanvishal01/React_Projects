import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("Seafood");

  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      if (!res.ok) {
        throw new Error("Meal Not fetched");
      }
      const data = await res.json();
      setRecipes(data.meals);
    } catch (error) {
      console.log("Meal Not Found", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    fetchRecipe();
  }, [query]);

  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="my-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border-y-2 outline-none border-gray-400  w-[75%] text-xl"
            />
            <button
              type="submit"
              className=" px-4 py-2 ml-5 w-[20%] bg-red-400 text-white text-xl hover:bg-red-600"
            >
              Search
            </button>
          </form>
        </div>
        <div className="recipes grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-10  ">
          {recipes &&
            recipes.map((recipe) => {
              const ingredients = [];
              for (let i = 1; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                if (ingredient) {
                  ingredients.push(`${ingredient} - ${measure}`);
                }
              }
              return (
                <Recipe
                  key={recipe.idMeal}
                  title={recipe.strMeal}
                  category={recipe.strCategory}
                  area={recipe.strArea}
                  image={recipe.strMealThumb}
                  ingredients={ingredients}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
