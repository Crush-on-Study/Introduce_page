import projects from '../data/projects';

test('projects data is defined and not empty', () => {
  expect(projects).toBeDefined();
  expect(projects.length).toBeGreaterThan(0);
});
