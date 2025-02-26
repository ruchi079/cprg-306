"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    console.log(newItem);
    alert(
      "Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}"
    );

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bordrer rounded-lg shadow=md bg-white]"
    >
      {/* Name */}
      <div>
        <label className="block fond-medium text-black">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="border p-2 rounded w-full text-black"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block font-medium text-black">Quantity: </label>
        <div className="fkex items-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            -
          </button>
          <span className="text-xl font-medium tsxt-black">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium text-black">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full text-black"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beveages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-80 py-2 rounded hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
}
