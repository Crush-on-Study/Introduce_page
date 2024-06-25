import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme } = useTheme();
  const headerImage = theme === 'light' 
    ? `${process.env.PUBLIC_URL}/daytime.gif` 
    : `${process.env.PUBLIC_URL}/night.gif`;

  return (
    <div className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content"></div>
    </div>
  );
};

export default Header;
