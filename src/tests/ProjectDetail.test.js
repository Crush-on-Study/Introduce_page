import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectDetails from '../components/ProjectDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const project = {
  id: 1,
  title: 'Test Project',
  description: 'This is a test project',
};

test('renders Project Details Page', () => {
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries={['/project-details/1']}>
        <ProjectDetails project={project} />
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText(/Project Details Page/)).toBeInTheDocument();
});
