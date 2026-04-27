import axios from 'axios';

// Use relative URL in dev (proxy) or set to deployed backend later
const API_URL = 'http://localhost:5000/api/items';

export const fetchItems = () => axios.get(API_URL);
export const createItem = (item) => axios.post(API_URL, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);