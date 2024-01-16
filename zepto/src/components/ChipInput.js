// ChipInput.js
import React from "react";

const ChipInput = ({ searchText, onInputChange }) => (
  <input
    type="text"
    className="input-field"
    placeholder="Type to search..."
    value={searchText}
    onChange={(e) => onInputChange(e.target.value)}
  />
);

export default ChipInput;
