import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ThemeProvider } from '../contexts/ThemeContext';
import '@testing-library/jest-dom';

test('renders ThemeSwitcher component', () => {
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

  // 특정 텍스트나 요소가 존재하는지 확인
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
