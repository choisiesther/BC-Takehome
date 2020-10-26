import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductName from './ProductName';

test('all things ProductName', () => {
  
  const component = render(<ProductName />);
  const { getByTestId } = component;
  const root = getByTestId("productName-Root");
  const title = getByTestId("productName-Title");
  const bestSeller = getByTestId("productName-Label-BestSeller");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productName-Root").length).toBe(1);
  expect(title).toBeInTheDocument();
  expect(screen.getAllByTestId("productName-Title").length).toBe(1);
  expect(bestSeller).toBeInTheDocument();
  expect(screen.getAllByTestId("productName-Label-BestSeller").length).toBe(1);

});