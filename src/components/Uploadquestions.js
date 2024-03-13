import React from 'react'
import Navbar1 from './Navbar1'
import { useState } from 'react'
import Choice from './Choice'
import Select from './Select'
import Fillups from './Fillups'

const Uploadquestions = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [savedData, setSavedData] = useState(null);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSave = () => {
        setSavedData(selectedOption);
    };

    const handleSaveAndAddAnother = () => {
        handleSave();
        window.location.reload();
    };


    return (
        <div>
            <Navbar1 />
            <h1 style={{ marginTop: '20px', fontWeight: '500', textAlign: 'center' }}>Hey admins, Upload up your questions</h1>

            <div className='container'>
                <label className="label" htmlFor="type">
                    Question type
                </label>
                <select className="select-field" name="type" onChange={handleChange} value={selectedOption}>
                    <option value="">--Question type--</option>
                    <option value="choice" >Multiple choice</option>
                    <option value="select">Multiple select</option>
                    <option value="fill">Fill up's</option>
                </select>
                {selectedOption === 'choice' && <Choice />}
                {selectedOption === 'select' && <Select />}
                {selectedOption === 'fill' && <Fillups />}
                <button className='button1' style={{ marginLeft: '20px' }}>Save</button>
                <button className='button1' style={{ marginLeft: '20px', width: '220px' }} onClick={handleSaveAndAddAnother}>Save & Add Another</button>
            </div>
        </div>
    )
}

export default Uploadquestions