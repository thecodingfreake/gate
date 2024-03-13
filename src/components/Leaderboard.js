import React ,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faChartLine, faFileExcel, faTv, faNewspaper, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Navbar1 from './Navbar1';

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here, e.g., make an API call with the searchQuery
    console.log('Searching for:', searchQuery);
  };
  return (
    <div>
      <Navbar1 />

      <div className='center-container'>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Leaderboard</h1>
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px' }}>
          Discover achievements and rivals on our vibrant leaderboard - your hub for tracking scores and embracing friendly competition!</p>
      </div>

      <div className='lead-container'>
        <div className='lead-left'>
          <p style={{ color: 'grey', marginBottom: '20px', fontWeight: '600' }}>ANALYTICS</p>
          <div className='left-opt'>
            <FontAwesomeIcon icon={faHouse} style={{ color: "#28679E", marginRight: '8px' }} />
            <p>Overview</p>
          </div>
          <div className='left-opt'>
            <FontAwesomeIcon icon={faChartLine} style={{ color: "#28679E", marginRight: '8px' }} />
            <p>Insights</p>
          </div>
          <div className='left-opt'>
            <FontAwesomeIcon icon={faFileExcel} style={{ color: "#28679E", marginRight: '8px' }} />
            <p>Spreadsheet</p>
          </div>
          <hr />

          <div className='lead-left1'>
            <p style={{ color: 'grey', marginBottom: '25px', fontWeight: '600' }}>DEPARTMENT</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>CSE</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>IT</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>CSBS</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>AIDS</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>AIML</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>CS-CY</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>ECE</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>EEE</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>MECH</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>MCT</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>CIVIL</p>
            <p style={{ fontWeight: '500', marginBottom: '20px' }}>BME</p>
            <hr />
          </div>

          <div className='lead-left1'>
            <p style={{ color: 'grey', marginBottom: '20px', fontWeight: '600' }}>OTHERS</p>
            <div className='left-opt'>
              <FontAwesomeIcon icon={faHouse} style={{ color: "#28679E", marginRight: '8px' }} />
              <p>Home</p>
            </div>
            <div className='left-opt'>
              <FontAwesomeIcon icon={faNewspaper} style={{ color: "#28679E", marginRight: '8px' }} />
              <p>Questionbank</p>
            </div>
            <div className='left-opt'>
              <FontAwesomeIcon icon={faTv} style={{ color: "#28679E", marginRight: '8px' }} />
              <p>Resource</p>
            </div>
            <div className='left-opt'>
              <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#28679E", marginRight: '8px' }} />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className='lead-right'>
        <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Leaderboard