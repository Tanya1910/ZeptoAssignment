// ChipList.js
import React from 'react';

const ChipList = ({ chips, removeChip }) => (
  <div className="chip-container">
    {chips.map((chip, index) => (
      <div key={index} className="chip">
        {chip}
        <span className="chip-remove" onClick={() => removeChip(chip)}>X</span>
      </div>
    ))}
  </div>
);

export default ChipList;
