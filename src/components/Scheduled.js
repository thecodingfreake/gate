import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { dashContext } from '../userContext';
import { useContext } from 'react';
const Scheduled = () => {
 const {userstate,setUserstate}=useContext(dashContext)
 const [test,setTest]=useState([])
 console.log(userstate)
 useEffect(()=>{
  try
  {axios.get(`http://localhost:5000/get_test/${userstate.email}`).then(res=>{
  console.log(res.data)
  const t=res.data
  setTest(t)
 }
  ).catch(err=>{
    console.log(err)
  })
,[]}
  catch(Err){
    console.log(Err)
  }
 },[])
 console.log(test)
  return (
    <div>
      <NavBar />
      <h1 style={{ marginTop: '50px', paddingLeft: '80px' }}>Look up what you got,</h1>
      {test.map(item => (
        <div key={item} className='test-container'>
          <div className='test-form' style={{ display: 'flex', flexDirection: 'column', lineHeight: '30px' }}>
            <h1>Gate Mock Exam</h1>
            <p> For Departments:(CSE,IT,CSBS)</p>
            <p>Testid: {item}</p>
            <Link className='test-link' to={`/instruction/${item}`}><button className='test-link' style={{background:"black",borderRadius:"5px",width:"120px",height:"35px"}}>Take Test</button></Link>
            </div>
        </div>
      ))}

      {/* <div className='test-container'>
        <form className='test-form' style={{ display: 'flex', flexDirection: 'column',lineHeight:'30px' }}>
          <h1>Gate Mock Exam</h1>
          <p> For Departments:(AIDS,AIML)</p>
          <p>Total time: 1hr 30min</p>
          <button><Link className='test-link' to='/instruction'>Take Test</Link></button>
        </form>
      </div>

      <div className='test-container'>
        <form className='test-form' style={{ display: 'flex', flexDirection: 'column',lineHeight:'30px' }}>
          <h1>Gate Mock Exam</h1>
          <p> For Departments:(ECE,EEE)</p>
          <p>Total time: 1hr 30min</p>
          <button><Link className='test-link' to='/instruction'>Take Test</Link></button>
        </form>
      </div> */}
    </div>
  )
}

export default Scheduled