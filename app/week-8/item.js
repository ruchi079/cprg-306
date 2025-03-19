import { useState } from "react";

export default function Item({ name, quantity, onSelect }) {
  const [selected, setSeelcted] = useState(false);

  return (
    <li
      className={`p-2 cursor-pointer hover:bg-gray-700 rounded-lg ${
        selected ? "bg-gray-600" : ""
      }`}
      onClick={() => {
        setSeelcted(!selected);
        onSelect(name);
      }}
    >
      {name} <span className="text-gray-400 text-sm">({quantity})</span>
    </li>
  );
}
