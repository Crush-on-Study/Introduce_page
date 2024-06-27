import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const { theme } = useTheme();
  return <div>{theme}</div>;
};

test('renders ThemeProvider and useTheme hook', () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  // 다크 모드로 시작하면 다크 모드인지 확인
  expect(screen.getByText(/light/)).toBeInTheDocument();
});
