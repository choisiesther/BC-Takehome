import React from 'react';
import cx from 'classnames';
import s from './ProductImage.module.scss';

class ProductImage extends React.Component {
    render() {
        if (!this.props.image) return null;

        const { url, alt } = this.props.image;

        return (
            <summary className={cx(this.props.className, s.root)} data-testid="productImage-Root">
                <img src={url} alt={alt} data-testid="productImage-Image" />
            </summary>
        )
    }
}

export default ProductImage;