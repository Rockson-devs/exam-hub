import React from "react";
import Head from "next/head";
import examQuestions from "./examQuestions";

const ExamsPage = () => {
  return (
    <div>
      {examQuestions.map((question, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md"
        >
          <h2 className="font-bold text-lg mb-2">{question.question}</h2>
          <ul className="list-none p-0 m-0">
            {question.options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="text-gray-600">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-2">Answer: {question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ExamsPage;
