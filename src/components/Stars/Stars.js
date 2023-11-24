import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import classes from './Starts.module.css'

const Stars = ({ stars ,reviews}) => {
  return (
    <div className={classes.star}>
      <span>
        {stars >= 1 ? (
          <BsStarFill />
        ) : stars >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {stars >= 2 ? (
          <BsStarFill />
        ) : stars >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {stars >= 3 ? (
          <BsStarFill />
        ) : stars >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {stars >= 4 ? (
          <BsStarFill />
        ) : stars >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {stars === 5 ? (
          <BsStarFill />
        ) : stars >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <p className={classes.reviews}>
      ({reviews} customer reviews)
      </p>
    </div>
  );
};

export default Stars;
