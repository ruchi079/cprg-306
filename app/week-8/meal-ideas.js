"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMealIdeas(ingredient) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2 text-white">Meal Ideas</h2>
      {ingredient ? (
        loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : meals.length > 0 ? (
          <ul className="space-y-3">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-lg"
                />
                <span className="text-white">{meal.strMeal}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No meal ideas found.</p>
        )
      ) : (
        <p className="text-gray-400">Select an item to see meal ideas</p>
      )}
    </div>
  );
}
