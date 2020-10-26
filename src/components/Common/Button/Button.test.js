import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddToCartButton from './Button.jsx';

test('all things Button', () => {

    const component = render(<AddToCartButton />);
    const { getByTestId } = component;
    const button = getByTestId("button-Root");

    expect(button).toBeInTheDocument();
    expect(screen.getAllByTestId("button-Root").length).toBe(1);



});