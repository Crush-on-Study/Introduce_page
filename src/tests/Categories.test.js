// src/tests/Categories.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from '../components/Categories';

test('renders Categories component', () => {
  render(<Categories />);
  const educationElement = screen.getByText(/Education/i);
  expect(educationElement).toBeInTheDocument();
});
