import { useState, useEffect } from 'react';
import { fetchItems, createItem, deleteItem } from './api';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const res = await fetchItems();
      setItems(res.data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  const handleAdd = async (newItem) => {
    try {
      const res = await createItem(newItem);
      setItems([res.data, ...items]);
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Item Manager</h1>
      <AddItem onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;