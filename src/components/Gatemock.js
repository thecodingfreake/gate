import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkoutques from './Checkoutques';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const itemsPerPage = 5;
const Gatemock = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [testId, setTestId] = useState('');
  const [question, setQuestion] = useState([]);
  const [currentPageHard, setCurrentPageHard] = useState(1);
  const [currentPageMedium, setCurrentPageMedium] = useState(1);
  const [currentPageEasy, setCurrentPageEasy] = useState(1);
  const [hardq,setHardq]=useState([])
  const [mediumq,setMediumq]=useState([])
  const [easyq,setEasyq]=useState([])
  const navigate=useNavigate()
  const handlePageChange = (page, setPageFunction) => {
    setPageFunction(page);
  };

  const renderTable = (questions, currentPage, setCurrentPage,types) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(questions.length / itemsPerPage);

    return (
      <div style={{ marginLeft: '180px' }}>
        <h1 style={{ marginTop: '20px', fontWeight: '500' }}>{types}:</h1>
        <table className="question-table">
          <thead>
            <tr>
              <th>Question ID</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.question}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '10px' }}>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1, setCurrentPage)}
          >
            Previous
          </button>
          <span style={{ margin: '0 10px' }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1, setCurrentPage)}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleCheckoutClick = () => {
    // Toggle the showCheckout state to true when the "Checkout" button is clicked
    setShowCheckout(true);

    // Scroll to the Checkoutques section if the element is found
    const checkoutquesSection = document.getElementById('checkoutques');
    if (checkoutquesSection) {
      checkoutquesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
const checked=()=>{
  const h=hardq.map(item=>item.id)
  const m=mediumq.map(item=>item.id)
  const e=easyq.map(item=>item.id)
  const nitem={
    testid:testId,
    hard:h,
    medium:m,
    easy:e
  }
  axios.post("http://localhost:5000/test/schedule/",nitem).then(res=>{
    if(res.data==='ok'){
        alert("test has scheduled");
        navigate("/")
    }
    else if(res.data==="exists"){
      alert("test id exists");
    }
  }).catch()
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ques = {
      hard: Number(hard),
      medium: Number(medium),
      easy: Number(easy),
    };
    try {
      const response = await axios.post("http://localhost:5000/questions/spec/", ques);
      setQuestion(response.data);
      setHardq(response.data.hard)
      setMediumq(response.data.medium)
      setEasyq(response.data.easy)
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ float: 'left', width: '45%', marginRight: '5%', marginTop: '60px' }}>
          <label className="label" htmlFor="startDatetime">
            Start Date and Time
          </label>
          <DatePicker
            className="form-datepicker"
            selected={startDate}
            onChange={handleStartDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <label className="label" htmlFor="endDatetime">
            End Date and Time
          </label>
          <DatePicker
            className="form-datepicker"
            selected={endDate}
            onChange={handleEndDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <div style={{ float: 'left', width: '45%', marginTop: '60px' }}>
          <div>
            <label className='label'>No of questions</label>
            <input
              className='input-field'
              type='number'
              value={questionsCount}
              onChange={(e) => setQuestionsCount(e.target.value)}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label className='label'>Easy count</label>
            <input
              className='input-field'
              type='number'
              value={easy}
              onChange={(e) => setEasy(e.target.value)}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label className='label'>Medium count</label>
            <input
              className='input-field'
              type='number'
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label className='label'>Hard count</label>
            <input
              className='input-field'
              type='number'
              value={hard}
              onChange={(e) => setHard(e.target.value)}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label className='label'>Test ID</label>
            <input
              className='input-field'
              type='text'
              value={testId}
              onChange={(e) => setTestId(e.target.value)}
            />
          </div>
        </div>

        <div style={{ clear: 'both' }}>
          <button className='button' type="submit" onClick={handleCheckoutClick}>
            Checkout
          </button>
        </div>
      </form>

      {showCheckout && (
        <div id="checkoutques" style={{ marginTop: '200px' }}>
          <div>
      <h1 style={{ marginTop: '20px', fontWeight: '500', textAlign: 'center' }}>
        Question viewing center
      </h1>
      <p style={{ marginTop: '20px', fontSize: '18px', textAlign: 'center' }}>
        Here you can look up to the questions being generated for the particular test...
      </p>

      {renderTable(hardq, currentPageHard, setCurrentPageHard,"hard")}
      {renderTable(mediumq, currentPageMedium, setCurrentPageMedium,"medium")}
      {renderTable(easyq, currentPageEasy, setCurrentPageEasy,"easy")}
    </div>
        </div>
      )}
      <button onClick={checked}>ok</button>
    </div>
  );
};

export default Gatemock;
