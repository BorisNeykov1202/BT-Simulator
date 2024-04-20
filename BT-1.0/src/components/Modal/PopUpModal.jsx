import React, { useState } from "react";
export default function PopUpModal({  printTree, submitValue, message}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    submitValue(inputValue);
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="input-container">
            <p className="enter-value-text">{message}</p>
            <input type="text" value={inputValue} onChange={handleInputChange} />
          </div>
          <button className='modal-submit-btn' onClick={handleSubmit}>Insert Element</button>
          <button className='print-tree-btn' onClick={printTree}>Return</button>
        </div>
      </div>
    </>
  );
}
