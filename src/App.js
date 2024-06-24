import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import ControlButtons from './ControlButtons';
import './App.css';

const App = () => {
  const [num, setNum] = useState(75); 
  const [history, setHistory] = useState([75]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateNumber = (newNum) => {
    const clampedNum = Math.max(0, Math.min(newNum, 150));
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(clampedNum);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setNum(clampedNum);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNum(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNum(history[currentIndex + 1]);
    }
  };

  return (
    <div className="App">
      <h1>Progress Bar </h1>
      <ProgressBar value={num} />
      <ControlButtons 
        onIncrement={() => updateNumber(num + 1)} 
        onDecrement={() => updateNumber(num - 1)} 
        onUndo={handleUndo} 
        onRedo={handleRedo} 
      />
    </div>
  );
};

export default App;
