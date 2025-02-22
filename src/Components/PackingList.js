import React from "react";
import { useState } from "react";
import Item from "./Components/Items";
function PackingList({
  items,
  onDeleteItem,
  onHandleItemToggle,
  onHandleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [...items];

  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onHandleItemToggle={onHandleItemToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onHandleClearList}>Clear All</button>
      </div>
    </div>
  );
}

export default PackingList;
