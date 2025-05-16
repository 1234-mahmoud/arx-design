import React, { useState } from "react";
import "../style/Questions.css";
export default function Questions() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [rotate, setRotate] = useState(0);
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setRotate((prev) => (prev === 0 ? 45 : 0));
  };

  return (
    <div className="questions-comp">
      <div className="ques-title">
        <h1>frequently asked questions</h1>
        <p>Got questions? We've got answers!</p>
        <p>Browse our FAQs to find everything you need to know.</p>
      </div>
      <div className={`questions-block ${showAnswer ? "show-answer" : "hide-answer"}`}>
        <div className="quest">
          <button
            onClick={toggleAnswer}
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            +
          </button>
          <p>
            How Can I Find The Best Real Estate Agent To Help Me Buy Or Sell a
            Property?
          </p>
        </div>
      <div className={`answer `}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          consectetur suscipit! Natus accusantium modi quaerat. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quas, consectetur
          suscipit! Natus accusantium modi quaerat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas, consectetur suscipit! Natus
          accusantium modi quaerat.
        </p>
      </div>
      </div>

      <div className="second-title">
        <h4>didn't find an answer to your question?</h4>
        <p>get in touch with us for details on additional services.</p>
      </div>
    </div>
  );
}
