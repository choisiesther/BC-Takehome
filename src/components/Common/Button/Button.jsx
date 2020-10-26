import React from 'react';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: '#231f20',
        borderRadius: '4px',
        border: '0',
        color: '#fefefe',
        height: 'auto',
        padding: '14px 24px',
        minWidth: '231px',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '2.5px',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: '#231f20'
        }
    }
}

function AddToCartButton(props) {
    const { classes, children, className, testId, ...other } = props;

    return (
        <Button className={cx(classes.root, className)} {...other} data-testid={testId || "button-Root"}>
            {children}
        </Button>
    )
}

export default withStyles(styles)(AddToCartButton);