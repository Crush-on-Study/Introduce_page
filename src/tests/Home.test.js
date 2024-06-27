import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import { ThemeProvider } from '../contexts/ThemeContext';
import '@testing-library/jest-dom';

test('renders Home component', () => {
  render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );

  // 특정 텍스트가 존재하는지 확인
  expect(screen.getByText(/안녕하세요! 고객의 입장에서 불편함을 찾는, 강현빈입니다/)).toBeInTheDocument();
  expect(screen.getByText(/Education/)).toBeInTheDocument();
  expect(screen.getByText(/경력사항/)).toBeInTheDocument();
  expect(screen.getByText(/자격증/)).toBeInTheDocument();
});
