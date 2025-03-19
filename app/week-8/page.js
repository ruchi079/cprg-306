"use client";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import items from "./items.json";

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(itemName) {
    console.log("Clicked item:", itemName);

    // Clean up item name (remove quantity, emojis)
    const cleanedName = itemName
      .split(",")[0]
      .trim()
      .replace(/[\uD800-\uDFFF]/g, "");
    console.log("Cleaned name:", cleanedName);

    setSelectedItemName(cleanedName);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="flex w-full max-w-4xl gap-6">
        {/* Left: Shopping List */}
        <div className="w-1/2 p-4 bg-gray-800 rounded-lg shadow-lg">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right: Meal Ideas */}
        <div className="w-1/2 p-4 bg-gray-800 rounded-lg shadow-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </div>
  );
}
