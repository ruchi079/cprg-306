"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disbled:opacity-50"
      >
        -
      </button>
      <span className="text-xl font-medium">{quantity}</span>
      <button
        onClick={increment}
        disabled={quantity === 2}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disbled:opacity-50"
      >
        +
      </button>
    </div>
  );
}
