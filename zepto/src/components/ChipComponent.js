// ChipComponent.js
import React, { useState, useEffect } from "react";
import ChipList from "./ChipList";
import ChipInput from "./ChipInput";
import DropdownList from "./DropdownList";
import "./ChipComponent.css"; // Import your CSS file

const ChipComponent = () => {
  const mockList = ["Apple", "Banana", "Cherry", "Date", "Fig"];

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [chips, setChips] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Use the mock list when the component mounts
    setItems(mockList);
  }, []);

  const filterItems = (text) => {
    setSearchText(text);
    if (text === "") {
      // If the input is empty, show the entire list and highlight the last chip
      setFilteredItems(items);
    } else {
      // Otherwise, filter items based on the input text
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredItems(filtered);
    }
  };

  const addChip = (item) => {
    setChips([...chips, item]);
    setItems(items.filter((i) => i !== item));
    setFilteredItems([]);
    setSearchText("");
  };

  const removeChip = (item) => {
    setChips(chips.filter((chip) => chip !== item));
    setItems([...items, item]);
  };

  const handleBackspacePress = () => {
    // Do any additional handling if needed
  };

  return (
    <div>
      <ChipList chips={chips} removeChip={removeChip} />
      <ChipInput
        searchText={searchText}
        onInputChange={filterItems}
        onBackspacePress={handleBackspacePress}
      />
      {searchText && (
        <DropdownList filteredItems={filteredItems} onItemClick={addChip} />
      )}
      {!searchText && chips.length > 0 && (
        <DropdownList
          filteredItems={items}
          onItemClick={(item) => addChip(item)}
          highlightedItem={chips[chips.length - 1]}
        />
      )}
    </div>
  );
};

export default ChipComponent;
