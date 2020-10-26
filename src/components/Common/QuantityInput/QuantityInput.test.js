import React from 'react';
import { render, screen } from '@testing-library/react';
import QuantityInput from './QuantityInput';

test('all things QuantityInput', () => {
  
  const component = render(<QuantityInput/>);
  const { getByTestId } = component;
  const input = getByTestId("quantityInput-Input");

  expect(input).toBeInTheDocument();
  expect(screen.getAllByTestId("quantityInput-Input").length).toBe(1);
  expect(screen.getByRole('input')).toEqual(input);

});