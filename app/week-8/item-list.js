import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item key={item.name} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
