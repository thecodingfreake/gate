import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Scheduled from './components/Scheduled';
import Unscheduled from './components/Unscheduled';
import Assigntest from './components/Assigntest';
import Leaderboard from './components/Leaderboard';
import Adminview from './components/Adminview';
import HomePage from './HomePage';
import Instruction from './components/Instruction';
import Questionpage from './Questionpage';
import Login from './components/Login';
import Signup from './components/Signup';
import Resources from './components/Resources';
import Uploadquestions from './components/Uploadquestions';
import NavBar from './components/NavBar';
import Checkoutques from './components/Checkoutques';
import { dashContext } from './userContext';
import { useState } from 'react';
function App() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [userstate, setUserstate] = useState({
    email: storedUser ? storedUser.email : '',
    loggedin: storedUser ? true : false,
  });
  console.log(userstate)
  return (
    <BrowserRouter>
    <dashContext.Provider value={{userstate,setUserstate}}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='questions/:id' element={<Questionpage />} />
        <Route path='instruction/:id' element={<Instruction />} />
        <Route path='schedule' element={<Scheduled />} />
        <Route path='unschedule' element={<Unscheduled />} />
        <Route path='assign' element={<Assigntest />} />
        <Route path='leaderboard' element={<Leaderboard />} />
        <Route path='admin' element={<Adminview />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' from element={<Signup />} />
        <Route path='resources' from element={<Resources />} />
        <Route path='uploadquestion' from element={<Uploadquestions />} />
        <Route path='navbar' from element={<NavBar />} />
        <Route path='checkout' from element={<Checkoutques />} />
        
      
      </Routes>
      </dashContext.Provider>
    </BrowserRouter>
  );
}

export default App;
