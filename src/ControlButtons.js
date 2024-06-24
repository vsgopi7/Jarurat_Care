import React from 'react';

const ControlButtons = ({ onIncrement, onDecrement, onUndo, onRedo }) => {
  return (
    <div className="control-buttons">
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onUndo}>Undo</button>
      <button onClick={onRedo}>Redo</button>
    </div>
  );
};

export default ControlButtons;
