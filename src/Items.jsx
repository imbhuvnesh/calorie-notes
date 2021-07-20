import "./App.css";
import ItemCard from "./ItemCard";

const Item = ({ items, deleteItem, editItem }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <ItemCard
            itemName={item.itemName}
            calorieVal={item.calorieVal}
            id={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Item;
