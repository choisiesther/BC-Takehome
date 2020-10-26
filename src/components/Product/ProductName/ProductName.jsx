import React from 'react';
import s from './ProductName.module.scss';
import cx from 'classnames';
import { title, extras } from 'mock/mockData.json';

class ProductName extends React.Component {
    render() {
        return (
            <div data-testid="productName-Root">
                {extras?.labels?.bestSeller && (
                    <span className={cx(s.label, s.bestSeller)} data-testid="productName-Label-BestSeller">Best Seller</span>
                )}
                <h1 className={s.title} data-testid="productName-Title">{title}</h1>
            </div>
        )
    }
}

export default ProductName;