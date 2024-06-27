// src/__tests__/ProgressBar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../components/ProgressBar';

test('renders ProgressBar with correct percentage', () => {
  const { getByText } = render(<ProgressBar percentage={50} />);
  expect(getByText(/50%/)).toBeInTheDocument();
});

test('renders ProgressBar with 0% if no percentage provided', () => {
  const { getByText } = render(<ProgressBar />);
  expect(getByText(/0%/)).toBeInTheDocument();
});
