import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${value / 1.5}%` }}>
        {value}
      </div>
    </div>
  );
};

export default ProgressBar;
