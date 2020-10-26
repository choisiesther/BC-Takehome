import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('all things Footer', () => {
  
  const component = render(<Footer />);
  const { getByTestId } = component;
  const root = getByTestId("footer-Root");
  const year = new Date().getFullYear();

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("footer-Root").length).toBe(1);
  expect(root.textContent).toMatch(String(year));
  
});