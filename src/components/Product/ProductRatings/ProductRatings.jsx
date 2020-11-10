import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
// Fade material ui is causing the error --> tried to upgrade to v5.00 but app crashed
// If I had more time I would figure out why the app was crashing
// then I would downgrade or upgrade to a different version

// Changed ProductRatings Component to functional component 
let ProductRatings = () => {
  const [rating, setRating] = useState(0);

  const getRatings = () => {
    // Simulates reaching out to a third-party for ratings and reviews
    fetch(`https://run.mocky.io/v3/7a8cd973-c050-489b-b2d2-eb8596a5a796`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setRating(response.rating));
  };

  useEffect(() => {
    getRatings();
  }, []);

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
  );
};

const RatingStars = withStyles(() => ({
  iconFilled: {
    color: "#231F20",
  },
}))(Rating);

export default ProductRatings;
