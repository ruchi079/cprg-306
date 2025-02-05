function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center border-b p-2">
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-blue-600 font-bold">{quantity}</span>
    </li>
  );
}

export default Item;
