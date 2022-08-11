import React from "react";
import FeedbackData from "../data/FeedBackData";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedBackStat() {
  const { feedback } = useContext(FeedbackContext);
  //calculate ratings
  let average = feedback.reduce((accum, curr) => {
    return accum + curr.rating;
  }, 0);
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedBackStat;
