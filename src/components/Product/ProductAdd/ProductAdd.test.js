import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductAdd from './ProductAdd';

test('all things ProductAdd', () => {
  
  const component = render(<ProductAdd maxNumber={10} sku={"1111"} />);
  const { getByTestId } = component;
  const root = getByTestId("productAdd-Root-1111");
  const decreaseButton = getByTestId("productAdd-Decrease-1111");
  const increaseButton = getByTestId("productAdd-Increase-1111");
  const quantityInput = getByTestId("productAdd-QuantityInput-1111");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productAdd-Root-1111").length).toBe(1);
  expect(decreaseButton).toBeInTheDocument();
  expect(screen.getAllByTestId("productAdd-Decrease-1111").length).toBe(1);
  expect(increaseButton).toBeInTheDocument();
  expect(screen.getAllByTestId("productAdd-Increase-1111").length).toBe(1);
  expect(quantityInput).toBeInTheDocument();
  expect(screen.getAllByTestId("productAdd-QuantityInput-1111").length).toBe(1);

  fireEvent.click(increaseButton);

  expect(quantityInput.value).toBe(2);

  fireEvent.click(decreaseButton);

  expect(quantityInput.value).toBe(1);

});