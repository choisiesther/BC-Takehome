import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDescription from './ProductDescription';

test('all things ProductDescription', () => {
  
  const component = render(<ProductDescription />);
  const { getByTestId } = component;

  const root = getByTestId("productDescription-Root");
  const description = getByTestId("productDescription-Description");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productDescription-Root").length).toBe(1);
  expect(description).toBeInTheDocument();
  expect(screen.getAllByTestId("productDescription-Description").length).toBe(1);

});