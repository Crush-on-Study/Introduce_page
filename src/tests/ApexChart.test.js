import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import ApexChart from './ApexChart';

const renderWithTheme = (ui, { theme }) => {
  return render(
    <ThemeProvider value={{ theme }}>
      {ui}
    </ThemeProvider>
  );
};

test('renders ApexChart with data labels in light mode', () => {
  renderWithTheme(<ApexChart />, { theme: 'light' });
  
  // Check if the chart title is rendered
  expect(screen.getByText('제가 걸어온 길입니다')).toBeInTheDocument();
  
  // Check if the data labels are rendered
  expect(screen.getByText(/days/)).toBeInTheDocument();
  
  // Check if the chart container is present
  expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
});

test('renders ApexChart with data labels in dark mode', () => {
  renderWithTheme(<ApexChart />, { theme: 'dark' });
  
  // Check if the chart title is rendered
  expect(screen.getByText('제가 걸어온 길입니다')).toBeInTheDocument();
  
  // Check if the data labels are rendered
  expect(screen.getByText(/days/)).toBeInTheDocument();
  
  // Check if the chart container is present
  expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
});

test('renders ApexChart with the correct annotation labels', () => {
  renderWithTheme(<ApexChart />, { theme: 'light' });

  // Check if the annotation labels are rendered
  expect(screen.getByAltText('SQLD 취득')).toBeInTheDocument();
  expect(screen.getByAltText('CSTS FL 취득')).toBeInTheDocument();
});
