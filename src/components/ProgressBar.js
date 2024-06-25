import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" 
      style={{ width: `${percentage}%` }}
      >
        <span className = "progress-label">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;