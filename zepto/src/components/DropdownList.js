// DropdownList.js
import React from "react";

const DropdownList = ({ filteredItems, onItemClick }) => (
  <div className="dropdown-list">
    {filteredItems.map((item, index) => (
      <div
        key={index}
        className="dropdown-item"
        onClick={() => onItemClick(item)}
      >
        {item}
      </div>
    ))}
  </div>
);

export default DropdownList;
