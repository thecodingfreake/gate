import React, { useState } from 'react';

const itemsPerPage = 5;

const Checkoutques = (question) => {
  const [currentPageHard, setCurrentPageHard] = useState(1);
  const [currentPageMedium, setCurrentPageMedium] = useState(1);
  const [currentPageEasy, setCurrentPageEasy] = useState(1);
  const {hard,medium,easy}=question.questions
  console.log(question)
  console.log(hard)
  const handlePageChange = (page, setPageFunction) => {
    setPageFunction(page);
  };

  const renderTable = (questions, currentPage, setCurrentPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(questions.length / itemsPerPage);

    return (
      <div style={{ marginLeft: '180px' }}>
        <h1 style={{ marginTop: '20px', fontWeight: '500' }}>{questions[0].type}:</h1>
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

  const questions = [
    { id: 1, question: 'hard problem questions', type: 'Hard' },
    { id: 2, question: 'hard problem questions', type: 'Hard' },
    { id: 3, question: 'hard problem questions', type: 'Hard' },
    { id: 4, question: 'hard problem questions', type: 'Hard' },
    { id: 5, question: 'hard problem questions', type: 'Hard' },
    { id: 6, question: 'hard here', type: 'Hard' },
  ];

  const questions1 = [
    { id: 1, question: 'medium problem questions', type: 'Medium' },
    { id: 2, question: 'medium problem questions', type: 'Medium' },
    { id: 3, question: 'medium problem questions', type: 'Medium' },
    { id: 4, question: 'medium problem questions', type: 'Medium' },
    { id: 5, question: 'medium problem questions', type: 'Medium' },
  ];

  const questions2 = [
    { id: 1, question: 'Easy problems', type: 'Easy' },
    { id: 2, question: 'Easy problems', type: 'Easy' },
    { id: 3, question: 'Easy problems', type: 'Easy' },
    { id: 4, question: 'Easy problems', type: 'Easy' },
    { id: 5, question: 'Easy problems', type: 'Easy' },
    { id: 6, question: 'Easy problems', type: 'Easy' },
  ];

  return (
    <div>
      <h1 style={{ marginTop: '20px', fontWeight: '500', textAlign: 'center' }}>
        Question viewing center
      </h1>
      <p style={{ marginTop: '20px', fontSize: '18px', textAlign: 'center' }}>
        Here you can look up to the questions being generated for the particular test...
      </p>

      {renderTable(hard, currentPageHard, setCurrentPageHard)}
      {renderTable(questions1, currentPageMedium, setCurrentPageMedium)}
      {renderTable(questions2, currentPageEasy, setCurrentPageEasy)}
    </div>
  );
};

export default Checkoutques;
