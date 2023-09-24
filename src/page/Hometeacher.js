import React, {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import "./styles.css";

function Hometeacher() {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const userName = user.displayName;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
      
     
}, [])

  
  return (
    <main >        
        <section>
          <div className="text-center"> 
            <br/><br/><br/>Hi<br/><br/>
          </div>      
        </section>
    </main>
  );
}

export default Hometeacher;