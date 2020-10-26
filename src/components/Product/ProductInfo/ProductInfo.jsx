import React from 'react';
import s from './ProductInfo.module.scss';
import ProductAdd from '../ProductAdd/ProductAdd';
import ProductName from '../ProductName/ProductName';
import ProductRatings from '../ProductRatings/ProductRatings';
import ErrorBoundary from 'components/Common/ErrorBoundary/ErrorBoundary';

class ProductInfo extends React.Component {

    render() {

        const formattedPrice = new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(this.props?.price);

        return (
            <div className={this.props.className} data-testid={`productInfo-Root-${this.props.sku}`}>
                <ProductName />
                <span className={s.sku} data-testid={`productInfo-Sku-${this.props.sku}`}>Item: #{this.props?.sku}</span>
                <ErrorBoundary>
                    <ProductRatings />
                </ErrorBoundary>
                <span className={s.price} data-testid={`productInfo-Price-${this.props.sku}`}>{formattedPrice}</span>
                {this.props.size && <span className={s.size} data-testid={`productInfo-Size-${this.props.sku}`}>SIZE: <strong>{this.props?.size}</strong></span>}
                <ProductAdd maxNumber={this.props?.maxNumber} sku={this.props.sku} />
            </div>
        )
    }
}

export default ProductInfo;