function ItemList({ items, onDelete }) {
  return (
    <div>
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items yet. Add one above.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong> – {item.description}
              <button onClick={() => onDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;