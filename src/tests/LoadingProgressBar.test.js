import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingProgressBar from '../components/LoadingProgressBar';
import { ThemeProvider } from '../contexts/ThemeContext';
import '@testing-library/jest-dom';

test('renders LoadingProgressBar component', () => {
  render(
    <ThemeProvider>
      <LoadingProgressBar />
    </ThemeProvider>
  );

  // 특정 텍스트가 존재하는지 확인
  expect(screen.getByText(/말은 쉽지.. 코드를 보여줘/)).toBeInTheDocument();
});
