import { useState } from "react";
import "./App.css";

function App() {
  const [mealName, setMealName] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMeals = async (name) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      if (!res.ok) {
        throw new Error("Failed To Fetch Meals");
      }
      const data = await res.json();
      console.log("Fetched Data: ", data);
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Meal Not Found", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMeals(mealName);
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="container">
      <div className="listOfItems">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search...."
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} onClick={() => handleMealClick(meal)}>
              {meal.strMeal}
            </li>
          ))}
        </ul>
      </div>
      <div className="details">
        {selectedMeal ? (
          <>
            <h3>{selectedMeal.strMeal}</h3>
            <img
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              width="100"
            />
            <p>{selectedMeal.strInstructions}</p>
          </>
        ) : (
          <p>
            Select a meal from the list to view its details. If the list is not
            visible, click the search button to refresh it.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
