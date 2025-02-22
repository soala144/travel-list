import React from "react";

function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to the list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything needed for your trip ✈"
          : `You have ${numItems} item${
              numItems > 1 ? "s" : ""
            } on your list, and you have packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
