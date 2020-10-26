import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductContainer from './ProductContainer';

test('all things ProductContainer', () => {
  
  const component = render(<ProductContainer />);
  const { getByTestId } = component;
  const root = getByTestId("productContainer-Root");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productContainer-Root").length).toBe(1);

});