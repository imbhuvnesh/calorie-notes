import { useState } from "react";
import AddItem from "./AddItem";
import Items from "./Items";
import "./App.css";

const Home = () => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    console.log(item, items);
    setItems([...items, item]);
  };

  const deleteItem = (itemId) => {
    let newItems = [];
    newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  const editItem = (itemId, newName, newCalVal) => {
    if (!newName && !newCalVal) return;
    let itemIdx = items.findIndex((item) => item.id === itemId);
    const newItem = {
      itemName: newName ? newName : items[itemIdx].itemName,
      calorieVal: newCalVal ? newCalVal : items[itemIdx].calorieVal,
      id: itemId,
    };
    const newItems = [...items];
    newItems[itemIdx] = newItem;
    setItems(newItems);
  };

  return (
    <div className="Home">
      <h1>Calorie Notes</h1>
      <AddItem addItem={addItems} />
      {items && (
        <Items items={items} deleteItem={deleteItem} editItem={editItem} />
      )}
    </div>
  );
};

export default Home;
