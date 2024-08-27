import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext, useState } from "react";
import "./pagesComponent.css";
import LoaderComponent from "./loaderComponent";
import Confetti from "react-confetti";

function QuestionsComponent({ Questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { answersArray, setAnswersArray, setQuestionsStatus } =
    useContext(AppContext);
  const [finished, setFinished] = useState(false);

 const handleResponse = () => {
   if (currentQuestionIndex < Questions.length - 1) {
     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
     return;
   }

   if (answersArray.length === 0) {
     answersArray[0] = "NA";
   }

   setFinished(true);
   setTimeout(() => {
     setQuestionsStatus(false);
     console.log(answersArray);
   }, 6000);
 };

  const handleYes = (string) => {
    if (answersArray.includes(string)) {
      handleResponse();
    } else {
      setAnswersArray([...answersArray, string]);
      handleResponse();
    }
  };

  return finished ? (
    <React.Fragment>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div>
        <p className="text-xl text-center my-5">
          {" "}
          Looks like you are all done{" "}
        </p>
        <p className="text-xl text-center my-5">
          {" "}
          Give us a moment to process all the information.{" "}
        </p>
        <LoaderComponent />
      </div>
    </React.Fragment>
  ) : (
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
                className="btn bg-[#F7B318] text-lg text-primary hover:bg-[#e6a514] border-none my-5 mx-2 px-[3rem]"
                onClick={() =>
                  handleYes(Questions[currentQuestionIndex].field)
                }>
                Yes
              </button>
              <button
                className="btn bg-[#F7B318] text-lg text-primary hover:bg-[#e6a514] border-none my-5 mx-2 px-[3rem]"
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
