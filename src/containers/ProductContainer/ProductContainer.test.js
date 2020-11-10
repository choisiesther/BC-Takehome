import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductContainer from './ProductContainer';

test('all things ProductContainer', () => {
  
  const component = render(<ProductContainer />);
  const { getByTestId, getByText } = component;
  const root = getByTestId("productContainer-Root");

  fireEvent.click(getByText("Add to Bag"));

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productContainer-Root").length).toBe(1);

});