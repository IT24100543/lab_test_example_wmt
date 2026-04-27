import { useState } from 'react';

function AddItem({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      alert('Both fields are required');
      return;
    }
    onAdd({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;