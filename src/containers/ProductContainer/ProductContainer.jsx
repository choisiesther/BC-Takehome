import React from 'react';
import s from './ProductContainer.module.scss';
import ProductDescription from 'components/Product/ProductDescription/ProductDescription';
import ProductImage from 'components/Product/ProductImage/ProductImage';
import ProductInfo from 'components/Product/ProductInfo/ProductInfo';
import product from 'mock/mockData.json';

class ProductContainer extends React.Component {
    render() {
        return (
            <div className={s.root} data-testid="productContainer-Root">
                <ProductImage
                    key="ProductImage"
                    className={s.productImageContainer}
                    image={product?.image}
                />
                <ProductInfo
                    key="ProductInfo"
                    className={s.productInfoContainer}
                    {...product}

                />
                <ProductDescription
                    key="ProductDescription"
                    className={s.productDescriptionContainer}
                    {...product}
                />
            </div>
        )
    }
}

export default ProductContainer;