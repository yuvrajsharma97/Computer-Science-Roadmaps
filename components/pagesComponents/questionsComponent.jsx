import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext, useState } from "react";

function QuestionsComponent({ Questions }) {
  // State to keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { answersArray, setAnswersArray } = useContext(AppContext);

  
  const handleResponse = () => {
    if (currentQuestionIndex < Questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("End of Questions");
    }
  };

  const handleYes = (string) => {
    if (answersArray.includes(string)) {
      handleResponse();
    } else {
      setAnswersArray([...answersArray, string]);
      handleResponse();
    }
  };

  return (
    <div>
      {Questions.length > 0 && currentQuestionIndex < Questions.length && (
        <div className="border-b p-4">
          <p className="font-bold text-lg">
            <span className="text-bright2">
              {Questions[currentQuestionIndex].id}.{" "}
            </span>
            {Questions[currentQuestionIndex].question}
          </p>
          <div className="mt-5 mb-2">
            <span>
              <button
                className="bg-bright1 text-white px-4 py-1 rounded-lg mx-5"
                onClick={() =>
                  handleYes(Questions[currentQuestionIndex].field)
                }>
                Yes
              </button>
              <button
                className="bg-bright1 text-white px-4 py-1 rounded-lg"
                onClick={handleResponse}>
                No
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionsComponent;
