import React, { useState } from 'react';

const Controls = ({ addElement, deleteElement }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    addElement(inputValue);
    setInputValue('');
  };

  const handleDelete = () => {
    deleteElement(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Controls;
