// src/__tests__/Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import { ThemeProvider } from '../contexts/ThemeContext';

test('renders header with light and dark mode images', () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );

  expect(screen.getByAltText('Light mode header')).toBeInTheDocument();
  expect(screen.getByAltText('Dark mode header')).toBeInTheDocument();
});
