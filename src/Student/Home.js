import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import "./styles1.css";

function Home() {
  const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const Username = user.displayName;
      const firstName = user.firstName;
      const lastName = user.lastName;
      const email = user.email;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log("Email",email)
      console.log("Username",Username)
    }

  
  return (
    <main >        
        <section>
          <div className="text-center"> 
            <br/><br/><br/>Welcome {user.displayName}<br/><br/>
          </div>      
        </section>
    </main>
  );
}

export default Home;


