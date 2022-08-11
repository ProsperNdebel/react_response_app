import React from "react";
import Card from "./shared/Card.jsx";
import { useState, useEffect } from "react";
import Button from "./shared/Button.jsx";
import RatingSelect from "./shared/RatingSelect.jsx";
import { isDisabled } from "@testing-library/user-event/dist/utils/index.js";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext.js";
function FeedBackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]); //useEffect takes a callback function and an array of dependencies, the callback will run if anything in the  array changes, if you leave the array empty the callback will run when the component loads
  //handling the text  change
  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Text must be atleast 10 charectars");
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };

  //handling the submission
  const handleSubmit = (e) => {
    //dont forget this
    e.preventDefault();
    //reason we are doing this check is cause we can still manipulate the chrome dev tools and stuff
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
        setText("");
      }
    }
  };
  //return the jsx
  return (
    <Card>
      {/* typically when you have a form you are going to have a piece of state for each input in that form */}
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
