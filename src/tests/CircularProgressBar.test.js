import React from 'react';
import '@testing-library/jest-dom';
import CircularProgressBarComponent from '../components/CircularProgressBar';

test('renders CircularProgressBarComponent with label and percentage', () => {
  render(<CircularProgressBarComponent label="Data Analysis (ML)" percentage={52} />);

  expect(screen.getByText('Data Analysis (ML)')).toBeInTheDocument();
});
