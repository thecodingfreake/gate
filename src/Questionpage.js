import React, { useEffect, useState } from "react";
import './Questionpage.css';
import Logo from './assets/logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { useContext } from "react";
import { dashContext } from "./userContext";
const Questionpage = () => {
    const { id } = useParams();
    const{userstate}=useContext(dashContext)
    const [question,setQuestion]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchQuestion = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/get_question/${id}`);
                setQuestion(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchQuestion();},[id])

    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(question.length).fill([])
    );

    const handleSubmit = () => {
        console.log(question);
        const correctAnswersCount = question.filter((question, index) => {
            if (Array.isArray(question.answer)) {
                if (question.multipleselect === 1) {
                    return question.answer.every((answer) =>
                        selectedAnswers[index].includes(answer)
                    );
                } else {
                    return question.answer.includes(selectedAnswers[index][0]);
                }
            } else {
                // Handle the case when question.answer is not an array
                return false;
            }
        }).length;
        const score={
            "score":question.length
        }
        axios.post(`http://localhost:5000/addscore/${id}/${userstate.email}`,score).then(res=>{
            if(res.data==='ok'){
            alert(`Your score: ${correctAnswersCount}/${question.length}`);
            navigate('/')
        }
        }).catch()
    };


    const handleSelect = (questionId, optionId) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        if (selectedAnswers[questionId]) {
            updatedSelectedAnswers[questionId] = [
                ...selectedAnswers[questionId],
                optionId,
            ];
        } else {
            updatedSelectedAnswers[questionId] = [optionId];
        }
        setSelectedAnswers(updatedSelectedAnswers);
    };




    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/* left side */}
            <div className="left-column">
                <img src={Logo} style={{ height: '14px', width: '80px' }} alt='logo'></img>
                <h1 style={{ color: '#2068DE', fontSize: '25px', marginTop: '25px' }}>GATE MOCK</h1>
                <p style={{ fontSize: '13px', color: 'gray', fontFamily: 'montserrat', overflow: 'hidden', lineHeight: '20px' }}>Your one-stop portal for GATE, Aptitude, and Core tests.
                    Comprehensive evaluations for knowledge, aptitude, and core competencies.
                    Unlock insights into your overall proficiency and readiness.</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                    <hr style={{ flex: 1, marginRight: '10px' }} />
                    <p style={{ color: 'gray', fontFamily: 'montserrat' }}>QUESTION</p>
                    <hr style={{ flex: 1, marginLeft: '10px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '10px' }}>
                    {Array.from({ length: 30 }, (_, index) => (
                        <button style={{ fontFamily: 'montserrat' }} key={index} className="button"> {index + 1}</button>
                    ))}
                </div>
                <hr></hr>

                {/* notice */}
                <h1 style={{ color: 'black', fontSize: '25px', fontFamily: 'montserrat', fontWeight: '500' }}>Status:</h1>

                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ backgroundColor: '#5ab75b', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '18px' }}>- Answered.</p>
                    </div>
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ backgroundColor: '#F4AC49', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '17px' }}>- Not Answered but Marked.</p>
                    </div>
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ backgroundColor: '#0A1D44', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '17px' }}>- Answered and Marked for review.</p>
                    </div>
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ backgroundColor: 'grey', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '17px' }}>- Not visited.</p>
                    </div>
                </div>
            </div>



            {/* right side */}
            <div className="right-column" style={{ overflowY: 'scroll' }}>
                {question.map((question, index) => (
                    <div key={index} style={{ height: '100vh' }}>
                        <p style={{
                            textAlign: "center", color: "white", fontFamily: 'montserrat', marginBottom: '20px',
                            marginTop: '150px', fontWeight: '500'
                        }}>
                            {index + 1} | {question.length}
                        </p>

                        <h2 style={{
                            textAlign: 'center', paddingLeft: '40px', paddingRight: '40px', color: "white",
                            fontFamily: 'montserrat', fontWeight: '400', marginBottom: '50px'
                        }}>{question.question}</h2>

                        {/* Centered options with white background */}
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px',
                                    backgroundColor: 'white', padding: '10px', maxWidth: '350px', marginLeft: '350px', borderRadius: '8px',
                                }}>
                                    {question.multipleselect === 1 ? (
                                        <input
                                            type="checkbox"
                                            name={`option-${index}`}
                                            value={option}
                                            onChange={() => handleSelect(index, option)}
                                            style={{ marginRight: '10px' }}
                                        />
                                    ) : (
                                        <input
                                            type="radio"
                                            name={`option-${index}`}
                                            value={option}
                                            onChange={() => handleSelect(index, option)}
                                            style={{ marginRight: '10px' }}
                                        />
                                    )}
                                    <label>{option}</label>
                                </li>
                            ))}
                        </ul>

                        <div className="questionButtons">
                            <button className="b1">Clear Response</button>
                            <button className="b2">Mark for Review & Next</button>
                            <button className="b4">Save & Mark for review</button>
                            <button className="b3">Save & Next</button>
                        </div>
                    </div>
                ))}
                <div className="rightButtons">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Questionpage;