// src/components/ItemInput.jsx
import React, { useState, useContext } from 'react';

const ItemInput = ({ label, items, setItems }) => {
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue && !items?.includes(inputValue)) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (item) => {
    setItems(items?.filter(i => i !== item));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={addItem}
          className="mt-6 py-2 px-4 bg-green-600 text-white rounded-md"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {items?.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span>{item}</span>
            <button
              type="button"
              onClick={() => removeItem(item)}
              className="py-1 px-2 bg-red-600 text-white rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemInput;
