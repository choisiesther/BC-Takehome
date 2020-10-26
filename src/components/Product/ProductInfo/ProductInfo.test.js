import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInfo from './ProductInfo';
import product from 'mock/mockData.json';

test('all things ProductInfo', () => {
  
  const component = render(<ProductInfo {...product} />);
  const { getByTestId } = component;
  const root = getByTestId("productInfo-Root-100000750");
  const sku = getByTestId("productInfo-Sku-100000750");
  const price = getByTestId("productInfo-Price-100000750");
  const size = getByTestId("productInfo-Size-100000750");

  expect(root).toBeInTheDocument();
  expect(screen.getAllByTestId("productInfo-Root-100000750").length).toBe(1);
  expect(sku).toBeInTheDocument();
  expect(screen.getAllByTestId("productInfo-Sku-100000750").length).toBe(1);
  expect(sku.textContent).toMatch(/100000750/);
  expect(price).toBeInTheDocument();
  expect(screen.getAllByTestId("productInfo-Price-100000750").length).toBe(1);
  expect(price.textContent).toMatch(/79/)
  expect(size).toBeInTheDocument();
  expect(screen.getAllByTestId("productInfo-Size-100000750").length).toBe(1);
  expect(size.textContent).toMatch(/30 ml \/ 1 fl oz/);

});