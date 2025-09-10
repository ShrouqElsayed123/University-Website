import { createContext, useState } from "react";

export const FeedbackContext=createContext();

export  function FeedbackProvider({children}){
      const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      college: "Engineering",
      feedback: "The university provides excellent resources.",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Sara Mohamed",
      college: "Medicine",
      feedback: "Professors are very supportive.",
      image: "https://via.placeholder.com/50",
    },
  ]);
 const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, { ...newFeedback, id: Date.now() }]);
  };

  const updateFeedback = (updated) => {
    setFeedbacks(
      feedbacks.map((fb) => (fb.id === updated.id ? updated : fb))
    );
  };

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
  };
return (
    <FeedbackContext.Provider  value={{ feedbacks, addFeedback, updateFeedback, deleteFeedback }}>
        {children}
        </FeedbackContext.Provider>
)
}