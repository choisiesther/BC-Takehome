import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

class ProductRatings extends React.Component {

    getRatings = () => {
        // Simulates reaching out to a third-party for ratings and reviews
        fetch(`https://run.mocky.io/v3/7a8cd973-c050-489b-b2d2-eb8596a5a796`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).
            then(response => response.json()).
            then(response => this.setRating(response.rating));
    };

    componentDidMount() {
        useEffect(() => {
            this.getRatings();
        }, []);
    }


    render() {

        const [rating, setRating] = useState(0);

        this.setRating = setRating;

        return (
            <Fade in={!!rating} timeout={1500}>
                <RatingStars
                    readOnly
                    value={rating}
                    precision={0.1}
                    emptyIcon={<StarBorderIcon />}
                    data-testid="productRatings-Stars"
                />
            </Fade>
        )
    }

}

const RatingStars = withStyles(() => ({
    iconFilled: {
        color: '#231F20'
    }
}))(Rating);

export default ProductRatings;