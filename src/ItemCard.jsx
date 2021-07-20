import "./App.css";
import { useState } from "react";

const ItemCard = ({ itemName, calorieVal, id, editItem, deleteItem }) => {
  const [isEditClicked, setisEditClicked] = useState(false);
  const [nameEdit, setEditName] = useState("");
  const [calEdit, setCalVal] = useState(null);

  return (
    <div className="item-preview" key={id}>
      <h2>{itemName}</h2>
      <h4>Calorie - {calorieVal}</h4>
      {isEditClicked && (
        <div className="edit-input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Calorie count"
            name="calorie"
            onChange={(e) => setCalVal(e.target.value)}
          />
          <div
            className="btn"
            onClick={() => {
              editItem(id, nameEdit, calEdit);
              setisEditClicked(false);
            }}
          >
            Save
          </div>
        </div>
      )}
      {!isEditClicked && (
        <div className="actions">
          <div className="btn" onClick={() => deleteItem(id)}>
            Delete
          </div>
          <div
            className="btn"
            onClick={() => {
              setisEditClicked(true);
            }}
          >
            Edit
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
