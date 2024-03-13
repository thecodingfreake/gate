import React, { useState } from 'react';
import NavBar from './NavBar';
import Gatemock from './Gatemock';
import Aptitudemock from './Aptitudemock';
import Coremock from './Coremock';

const Assigntest = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ marginTop: '20px', fontWeight: '500', textAlign: 'center' }}>Fill up to Schedule a test</h1>
      <div className='container'>
        <label className="label" htmlFor="type">
          Exam type
        </label>
        <select className="select-field" name="type" onChange={handleChange} value={selectedOption}>
          <option value="">--Exam type--</option>
          <option value="gate">Gate Mock Exam</option>
          <option value="aptitude">Aptitude Test</option>
          <option value="core">Core Test</option>
        </select>
        {selectedOption === 'gate' && <Gatemock />}
        {selectedOption === 'aptitude' && <Aptitudemock />}
        {selectedOption === 'core' && <Coremock />}
      </div>
    </div>
  );
};

export default Assigntest;
