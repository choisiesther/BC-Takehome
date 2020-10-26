import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductImage from './ProductImage';

test('all things ProductImage', () => {
  
  const component = render(<ProductImage />);
  const { getByTestId, rerender } = component;

  expect(screen.queryAllByTestId("productImage-Root").length).toBe(0);

  rerender(<ProductImage image={`path/to/image/src.jpg`} />)

  const root = getByTestId("productImage-Root");
  const image = getByTestId("productImage-Image");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productImage-Root").length).toBe(1);
  expect(image).toBeInTheDocument();
  expect(screen.getAllByTestId("productImage-Image").length).toBe(1);

});