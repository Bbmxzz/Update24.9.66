import React, {useState} from 'react';
import Text from '../components/elements/Text';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import "./styles.css";

const TeacherLogin = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="App">
      <div><h2 className="size-head ">
      <br/><br/>Teacher login<br/><br/>
      </h2> </div>
                        
      <form className="text-center" onSubmit={handleSubmit} >
        <div className="text-center">
          <label className="small-log">Username&nbsp;&emsp;&emsp; </label><br/>
          <input 
            type="text" 
            name="uname" 
            required 
            className="text-input"
            placeholder="Username"/>
          {renderErrorMessage("uname")}
        </div>
        <div className="text-center">
          <label className="small-log"><br/>Password &nbsp;&nbsp;&nbsp;&emsp;&emsp;</label><br/>
          <input 
            type="password" 
            name="pass" 
            required 
            className="text-input"
            placeholder="Password"/>
          {renderErrorMessage("pass")}
        </div><br/>
        <button                                     
          onClick={handleSubmit}
          className="lead boxx"
          >      
            Login                                                                  
        </button>
      </form>
    </div>
  );

    return(
        <div className="app">
      <div className="text-center">
        {isSubmitted  ? <NavLink to="/hometeacher" className="App">
                                    Login
                                </NavLink> : renderForm }
      </div>
    </div>
  );
}


export default TeacherLogin