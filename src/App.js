import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Taskboard from './components/taskboard';
import Weather from './components/weather/weather'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='weather' element={<Weather/>}/>
        <Route path="/tasksBoard" element={<Taskboard />} />
      </Routes>
    </Router>
  );
}

export default App;
