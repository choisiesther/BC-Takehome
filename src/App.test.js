import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('all things App', () => {
  
  const component = render(<App />);
  const { getByTestId } = component;
  const root = getByTestId("app-Root");
  const main = getByTestId("app-Main");

  expect(root).toBeInTheDocument();
  expect(main).toBeInTheDocument();
  expect(screen.getAllByTestId("app-Root").length).toBe(1);
  expect(screen.getAllByTestId("app-Main").length).toBe(1);

});
