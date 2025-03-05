export default function Item({ name, quantity }) {
    return (
      <li className="capitalize">
        {name} - {quantity}
      </li>
    );
  }
  