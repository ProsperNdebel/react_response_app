import React from "react";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "../components/shared/Spinner.jsx";
function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext); //you just destructure the values you want
  if (!isLoading && (!feedback || feedback.length === 0))
    return <p>No Feedback yet</p>;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedBackItem key={item.id} item={item} />;
      })}
    </div>
  );
}
FeedBackList.propTypes = {
  feedback: PropTypes.array, //look up how he did it
};
export default FeedBackList;
