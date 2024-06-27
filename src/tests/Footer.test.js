// src/__tests__/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('renders footer with contact info and links', () => {
  render(<Footer />);

  expect(screen.getByText(/이메일: twonkang00@naver.com/)).toBeInTheDocument();
  expect(screen.getByAltText('깃허브')).toBeInTheDocument();
  expect(screen.getByAltText('Notion')).toBeInTheDocument();
  expect(screen.getByAltText('WikiDocs')).toBeInTheDocument();
});
