import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import lightModeIcon from '../assets/light_mode_icon.png'; // 업로드한 이미지 경로
import darkModeIcon from '../assets/dark_mode_icon.png';  // 업로드한 이미지 경로

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher-container">
      <button className="theme-switcher" onClick={toggleTheme}>
        <img 
          src={theme === 'light' ? lightModeIcon : darkModeIcon} 
          alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        />
      </button>
      <p className="theme-mode-text">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
    </div>
  );
};

export default ThemeSwitcher;
