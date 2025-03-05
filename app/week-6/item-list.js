"use client"; // ✅ Ensures Client Component

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); // "name", "category", or "group"

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4">
      {/* Sorting Buttons */}
      <div className="flex gap-2 mb-4">
        <button 
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 border rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 border rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Category
        </button>
        <button 
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 border rounded ${sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Group by Category
        </button>
      </div>

      {/* Render Items */}
      {sortBy === "group" ? (
        <div>
          {Object.keys(groupedItems).sort().map((category) => (
            <div key={category} className="mb-4">
              <h2 className="text-lg font-bold capitalize">{category}</h2>
              <ul className="list-disc pl-4">
                {groupedItems[category].map((item) => (
                  <Item key={item.id} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-disc pl-4">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
