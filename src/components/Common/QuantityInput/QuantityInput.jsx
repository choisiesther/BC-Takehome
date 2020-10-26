import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '2rem',
        '&::before, &::after': {
            content: 'none'
        }
    },
    input: {
        textAlign: 'center',
    },
});

function QuantityInput(props) {
    const classes = useStyles();
    const { className, testId } = props;

    return (
        <Input
            className={className}
            classes={{
                root: classes.root,
                input: classes.input,
            }}
            value={props.value}
            readOnly
            type="number"
            inputProps={{
                'data-testid': testId || "quantityInput-Input"
            }}
        />
    )
}

export default QuantityInput;