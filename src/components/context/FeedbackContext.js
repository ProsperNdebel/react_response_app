import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
//create a context
const FeedbackContext = createContext();

//create a provider, the export is so you can use it outside
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  //we wanna upfate this piece of state when we click on the edit button, hence we have to define a function in this provider to take care of that, that function is editFeedback
  //to use that function after this pass it to the provider
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //fetching the data from the back end
  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:3001/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  //you put functions in the provider but to use you have to pass it in the value prop
  function deleteFeedBack(id) {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }
  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  //this will seitem to be edited
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  //update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  //any of the values you wanna use are gonna be in an object, value
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

//export the context
export default FeedbackContext;

//note that if the application is large you might have different contexts for users, for and so on
//after creating your context import it to App.js and wrap it around everything(remember the curly braces thin Prosper)(you import the provider no the context)
//then in the respective components just import {useContext} and the context Too
//and as the first thin in the component just pass in the context into useState and destrucure on the left side
