import React from 'react';
import s from './ProductDescription.module.scss';
import cx from 'classnames';
import { description } from 'mock/mockData.json';

class ProductDescription extends React.Component {
    render() {
        return (
            <div className={s.descriptionContainer} data-testid="productDescription-Root">
                <div className={s.descriptionContent}>
                    <div className={cx(this.props.className, s.description)} dangerouslySetInnerHTML={{ __html: description }} data-testid="productDescription-Description" />
                </div>
            </div>

        )
    }
}

export default ProductDescription;