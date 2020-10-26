import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('all things Header', () => {
  
  const component = render(<Header />);
  const { getByTestId } = component;
  const root = getByTestId("header-Root");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("header-Root").length).toBe(1);

});