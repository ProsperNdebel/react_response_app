import { FaTimes, FaEdit } from "react-icons/fa";
import React from "react";
import Card from "./shared/Card.jsx";
import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext.js"; //remember you always import the context and not the context

function FeedBackItem({ item }) {
  const { deleteFeedBack, editFeedback } = useContext(FeedbackContext);
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes
          color="purple"
          onClick={() => deleteFeedBack(item.id)}
        ></FaTimes>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
