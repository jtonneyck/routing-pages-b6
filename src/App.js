import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import students from "./data/students.json";
import StudentDetail from "./Components/StudentDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        {
          students.map((student)=> 
            <Link to={`/student-detail/${student.firstname}`}>
              {student.firstname}
            </Link>
          )
        }
                    
      </div>

      <div className="student-detail-container">
        <Route path="/student-detail/:firstname" component={StudentDetail} />
      </div>

    </div>
  );
}

export default App;