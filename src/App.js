import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Student/Home.js';
import Hometeacher from './page/Hometeacher.js';
import Signup from './Student/Signup.js';
import Login from './Student/Login.js';

import Homework from './page/Homepage/Studentpage/Homework.js';
import Profile from './page/Homepage/Studentpage/Profile.js';
import Score from './page/Homepage/Studentpage/Score.js';
import Game from './page/Homepage/Studentpage/Game.js';
import Lesson from './page/Homepage/Studentpage/Lesson.js';
import Attendance from './page/Homepage/Studentpage/Attendance.js';

import TeacherLogin from './page/TeacherLogin.js';

import Allstudent from './page/Homepage/Teacherpage/Allstudent.js';

import './App.css';
import Layout from './components/widgets/Layout';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js'; 
import Sidebar from './components/widgets/Sidebar.js';

function App() {
  return (
    <Router>
      <div className="backgroundimg">
        <section>          
          <div>            
            <Routes >
                <Route 

                  path="/home"
                  element={
                    <Layout>< Home /></Layout>
                  }
                />
                <Route 
                  path="/hometeacher"
                  element={
                    <Layout>< Hometeacher /></Layout>
                  }
                />
                <Route 
                  path="/Homework"
                  element={
                    <Layout>< Homework /></Layout>
                  }
                />
                <Route 
                  path="/Profile"
                  element={
                    <Layout>< Profile /></Layout>
                  }
                />
                <Route 
                  path="/Score"
                  element={
                    <Layout>< Score /></Layout>
                  }
                />
                <Route 
                  path="/Game"
                  element={
                    <Layout>< Game /></Layout>
                  }
                />
                <Route 
                  path="/Lesson"
                  element={
                    <Layout>< Lesson /></Layout>
                  }
                />
                <Route 
                  path="/Attendance"
                  element={
                    <Layout>< Attendance /></Layout>
                  }
                />

              <Route path="/" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/teacher" element={<TeacherLogin/>}/>
              
            </Routes>          
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;