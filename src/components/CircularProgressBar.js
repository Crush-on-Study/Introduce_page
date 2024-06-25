/*원형 프로그레스바 다루는 곳*/
import React from 'react';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import './CircularProgressBar.css';

const CircularProgressBarComponent = ({ colorCircle, colorSlice, percent, fontColor, round, fontSize, textPosition, children }) => {
  return (
    <CircularProgressBar
      colorCircle={colorCircle}
      colorSlice={colorSlice}
      percent={percent}
      fontColor={fontColor}
      round={round}
      fontSize={fontSize}
      textPosition={textPosition}
    >
      {children}
    </CircularProgressBar>
  );
};

export default CircularProgressBarComponent;
