import "./App.css";
import { useState } from "react";

const AddItem = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [calorieVal, setCalorieVal] = useState(null);

  return (
    <div className="add-calorie">
      <div className="input-boxes">
        <input
          type="text"
          name="item"
          id="item"
          placeholder="Item name"
          required
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          name="calorie"
          id="calorie"
          placeholder="Calorie amount"
          required
          onChange={(e) => setCalorieVal(e.target.value)}
        />
      </div>
      <div
        className="btn"
        id="add-btn"
        onClick={() => {
          if (itemName && calorieVal)
            addItem({ itemName, calorieVal, id: Date.now() });
          else
            alert("Please Enter valid inputs!")
        }}
      >
        Add Item
      </div>
    </div>
  );
};
export default AddItem;
