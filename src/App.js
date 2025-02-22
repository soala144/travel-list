import { useState, useEffect } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import Stats from "./Components/Stats";
import PackingList from "./Components/PackingList";

export default function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("packingList");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("packingList", JSON.stringify(items));
  }, [items]);

  function handleAdd(item) {
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

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdd} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandleItemToggle={handleToggleItem}
        onHandleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
