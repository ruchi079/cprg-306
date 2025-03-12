export default function ItemList({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => (
        <li key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          {item.name} - {item.quantity} ({item.category})
        </li>
      ))}
    </ul>
  );
}
