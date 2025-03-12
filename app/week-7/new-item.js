import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Other");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: Math.random().toString(), name, quantity, category });
    setName(""); // Reset input fields after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="Other">Other</option>
        <option value="Groceries">Groceries</option>
        <option value="Electronics">Electronics</option>
      </select>
      <button type="submit" style={{ padding: "5px" }}>Add Item</button>
    </form>
  );
}
