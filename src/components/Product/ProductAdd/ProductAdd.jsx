import React from 'react';
import s from './ProductAdd.module.scss';
import CartContext from 'context/CartContext/CartContext';
import QuantityInput from 'components/Common/QuantityInput/QuantityInput';
import AddToCartButton from 'components/Common/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import AddOutlined from '@material-ui/icons/AddOutlined';
import RemoveOutlined from '@material-ui/icons/RemoveOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';


class ProductAdd extends React.Component {

    state = {
        count: 1,
        openWarning: false,
    }

    static contextType = CartContext;

    handleQuantityUpdate = event => {
        const name = event.currentTarget.name;
        const amount = name === 'decrease' ? -1 : 1;
        if (this.state.count + amount > this.props.maxNumber || this.state.count + amount < 1) return;
        this.setState({ count: this.state.count + amount });
    }

    handleAddToBag = amount => {
        const { cartValue, updateCart } = this.context;
        if (cartValue < this.props.maxNumber && cartValue + amount < this.props.maxNumber) {
            updateCart(amount);
        } else {
            this.setState({ openWarning: true });
        }
    }

    handleCloseWarning = () => {
        this.setState({ openWarning: false });
    }

    handleChange = event => {
        this.setState({ count: event.value });
    }

    render() {
        return (
            <div className={s.root} data-testid={`productAdd-Root-${this.props.sku}`}>
                <div className={s.quantityContainer}>
                    <IconButton name="decrease" onClick={this.handleQuantityUpdate} data-testid={`productAdd-Decrease-${this.props.sku}`}>
                        <RemoveOutlined fontSize="small" />
                    </IconButton>
                    <QuantityInput
                        value={this.state.count}
                        className={s.quantityInput}
                        testId={`productAdd-QuantityInput-${this.props.sku}`}
                    />
                    <IconButton name="increase" onClick={this.handleQuantityUpdate} data-testid={`productAdd-Increase-${this.props.sku}`}>
                        <AddOutlined fontSize="small" />
                    </IconButton>
                </div>
                <AddToCartButton
                    classes={{
                        root: s.button
                    }}
                    onClick={() => this.handleAddToBag(this.state.count)}
                    testId={`addToCartButton-${this.props.sku}`}
                >
                    Add to Bag
                </AddToCartButton>
                <Snackbar
                    open={this.state.openWarning}
                    autoHideDuration={3000}
                    onClose={this.handleCloseWarning}
                    message={`You cannot have more than ${this.props.maxNumber} items in the cart at once`}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseWarning}>
                            <CloseIcon />
                        </IconButton>
                    }
                    data-testid={`productAdd-warning-${this.props.sku}`}
                >

                </Snackbar>
            </div >
        )
    }
}

export default ProductAdd;