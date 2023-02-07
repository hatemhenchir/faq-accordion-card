import React, { useState } from "react";
import "../styles/Card.css";
import icon from "../images/icon-arrow-down.svg";
import questions from "./question.json";
const Card = () => {
  const [visible, setVisible] = useState(questions);

  const toggleVisible = (index) => {
    setVisible(
      visible.map((question, i) => {
        if (index === i) {
          return { ...question, isVisible: !question.isVisible };
        }else if(question.isVisible){
          return {...question,isVisible:false};
        } 
        else {
          return question;
        }
      })
    );
  };
  return (
    <section className="card">
      <h2>FAQ</h2>
      {visible.map((question, index) => (
        <div
          onClick={() => toggleVisible(index)}
          className={ `question-response ${question.isVisible ? 'active':''}`}
          key={index}
        >
          <div>
            <h3 className={`question ${question.isVisible ? 'active':''} `}>{question.question}</h3>
            {question.isVisible && (
              <p className="response">{question.response}</p>
            )}
          </div>
          <button>
            <img className={`${question.isVisible ? 'rotate':''}`} src={icon} alt="" />
          </button>
        </div>
      ))}
      {/* <div className="question-response">
        <h3 className="question">How many team members can I invite?</h3>
        <button>
          <img src={icon} alt=""  />
        </button>
      </div>

      <div className="question-response">
        <div >
        <h3 className="question">What is the maximum file upload size?</h3>
        <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
        </div>
        
        <button>
          <img src={icon} alt=""  />
        </button>
      </div>

      <div className="question-response">
        <div>
        <h3 className="question">How many team members can I invite?</h3>
        {false &&<p>hello</p>}
        </div>  
        <button>
          <img src={icon} alt=""  />
        </button>
        
      </div>

      <div className="question-response">
        <h3 className="question">How many team members can I invite?</h3>
        <button>
          <img src={icon} alt=""  />
        </button>
        
      </div>

      <div className="question-response">
        <h3 className="question">How many team members can I invite?</h3>
        <button>
          <img src={icon} alt=""  />
        </button>
      </div> */}
    </section>
  );
};
export default Card;
