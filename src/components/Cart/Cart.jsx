import React from "react";
import s from "./Cart.module.scss";
import CartContext from "context/CartContext/CartContext";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

/*
 *
 * NOTE: Cart is only here to give an indication that "Add to Cart" is working.
 * It intentionally only keeps local state so, if you refresh, your "cart" will be cleared.
 * This is to remove the concept of a cart from the scope of the test.
 * You're welcome.
 *
 */

class Cart extends React.Component {
  render() {
    return (
      <div className={s.root} data-testid="cart-Root">
        <CartContext.Consumer>
          {({ cartValue }) => (
            <CartBadge badgeContent={cartValue} data-testid="cart-cartBadge">
              <LocalMallOutlinedIcon />
            </CartBadge>
          )}
        </CartContext.Consumer>
      </div>
    );
  }
}

const CartBadge = withStyles(() => ({
  root: {
    position: "initial",
  },
  badge: {
    backgroundColor: "#e5503f",
    color: "#fff",
    fontWeight: "700",
    fontSize: "0.625rem",
    //added CSS so that the badge of added items are shown 
    //was not sure how the badge should look like when items are added
    //the badge when first added jumps to the bag 
    //I wasn't sure how it should look so just changed the CSS to make sure the amount of items added appear on the corner of the bag
    transform: "scale(1) translate(-79%, 100%)",
  },
}))(Badge);

export default Cart;
