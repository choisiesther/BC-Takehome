import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductRatings from './ProductRatings';

test('all things ProductRatings', () => {
  
  const component = render(<ProductRatings />);
  const { getByTestId } = component;
  const root = getByTestId("productRatings-Stars");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productRatings-Stars").length).toBe(1);

});