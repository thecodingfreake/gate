import React, { useState } from "react";

const Question = (props) => {
  const { question } = props;
  const { id: qnNumber, questionText, options } = question;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", marginTop: "80px" }}>
      <p style={{ textAlign: "center", color: "white", fontFamily: 'montserrat',marginBottom:'20px' }}>
        {qnNumber} | 30
      </p>
      <p
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          textAlign: "center",
          color: "white",
          fontFamily: 'montserrat',lineHeight:'25px',wordSpacing:'2px'
        }}
      >
        {questionText}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {options.map((option) => (
          <button
            className="optionbar"
            htmlFor={`option${option.id}`}
            key={option.id}
          >
            <input
              type="radio"
              id={`option${option.id}`}
              name={`options_${qnNumber}`} // Ensure each question has a unique radio group
              checked={selectedOption === option.id}
              onChange={() => handleOptionSelect(option.id)}
            />
            <label
              style={{ fontFamily: 'montserrat', fontSize: "20px" }}
              htmlFor={`option${option.id}`}
            >{` ${option.value}`}</label>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
