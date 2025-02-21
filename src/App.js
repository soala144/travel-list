import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Car", quantity: 1, packed: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function handleAdd(item) {
    // Getting Previous items and adding new one
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdd} />
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItem}
        onHandleItemToggle={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
// Compononents

// Logo Component
function Logo() {
  return <h1>🌴 Far Away🚀</h1>;
}

// Logo Form
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need😍 for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Get an array of numbers from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} index={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// Logo PackingList
function PackingList({ item, onDeleteItem, onHandleItemToggle }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onHandleItemToggle={onHandleItemToggle}
          />
        ))}
      </ul>

      <div className="actions"></div>
    </div>
  );
}

// Logo Stats
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to the List 🚀 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything needed for you to go ✈"
          : ` You have have ${numItems} ${
              numItems <= 1 ? "item" : "items"
            } on your
        list, and you have already done ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

function Item({ item, onDeleteItem, onHandleItemToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onHandleItemToggle(item.id)}
      />
      {/* Display of the mapped text */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
