import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart.jsx';

test('all things Cart', () => {

    const component = render(<Cart />);
    const { getByTestId } = component;
    const root = getByTestId("cart-Root");
    const badge = getByTestId("cart-cartBadge");


    expect(root).toBeInTheDocument();
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe("0");


});