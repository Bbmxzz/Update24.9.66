import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  , updateProfile} from 'firebase/auth';
import { auth,db } from '../firebase';
import { getAuth } from "firebase/auth";
import { collection, addDoc,doc,setDoc } from "firebase/firestore";

import "./styles1.css";

const Signup = () => {

    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [error,setError]=useState();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = async (e) => {
      e.preventDefault()   
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {displayName : Username})
            updateProfile(auth.currentUser, { photoURL: 'https://f.ptcdn.info/698/056/000/p5vy2s7tu0Xjg7IM2Tc-o.jpg' });
            navigate("/login")
            // ...
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                const myuid = user.uid
                const myCollection = collection(db, "/users")
                const myDocumentData = {
                    firstName: firstName, 
                    lastName: lastName,
                    displayName: Username,
                    email: email,
                    password: password,
                    photo: 'https://f.ptcdn.info/698/056/000/p5vy2s7tu0Xjg7IM2Tc-o.jpg'
                    
                  };
                const myDocRef = doc(myCollection, myuid);
                await setDoc(myDocRef, myDocumentData);
                console.log("Document written with ID: ", myuid);
                } catch (e) {
                console.error("Error adding document: ", e);
                }
        })
       
        .catch((error) => {
            if (error.code == "auth/email-already-in-use") {
                setError("The email address is already in use");
                // alert();
            
              } else if (error.code == "auth/invalid-email") {
                setError("The email address is not valid.");
                 
              } else if (error.code == "auth/operation-not-allowed") {
                setError("Operation not allowed.");
              } else if (error.code == "auth/weak-password") {
                setError("The password is too weak.");
              }
            
        });
        
           
        
    }
    
    
  
  

  return (
    <main >        
        <section>

            <div className="App">
                <div className="text-center">
                    <div>
                        <h2 className="size-head">
                            <br />Are you new? <br />Sign up today
                        </h2>                      
                    </div>
                    
                    <form onSubmit={onSubmit} className="text-center" >                    
                        <div className=" text-center ">
                            <div>
                                <label htmlFor="email-address" className="small-log">
                                First name &nbsp;&emsp;&emsp;
                                </label><br />
                                
                                <input
                                    label="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}                                    
                                    name="firstname"
                                    type="text"                                    
                                    required                                
                                    className="text-input "
                                    placeholder="ชื่อจริง"                                   
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="small-log">
                                    Last name &nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    label="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}                                    
                                    required
                                    type="text"
                                    name="lastname"                                                                       
                                    className="text-input"
                                    placeholder="นามสกุล"                                    
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email-address" className="small-log">
                                Email address&nbsp;&nbsp;&nbsp;&nbsp; 
                                </label><br />
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}                                    
                                    required
                                    className="text-input"
                                    placeholder="6601xxxx@kmitl.ac.th"                                
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="small-log">
                                    Username &nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    label="text"
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}                                    
                                    required
                                    type="text"
                                    name="Username"                                                                       
                                    className="text-input"
                                    placeholder="Username"                                    
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="small-log">
                                    Password &nbsp;&nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}                                    
                                    required
                                    className="text-input "
                                    placeholder="Password"                                
                                />
                            </div>
                            
                        </div>                        
                                             
                    </form>
                    <p className="error">{error}</p>

                    <form onSubmit={onSubmit} className="text-center" >

                    <div>
                            <button
                                type="submit"                                                               
                                className="lead boxx"
                            >   
                                Sign up                                                             
                            </button>
                        </div>

                    </form>
                   

                    <p className="smaller">
                        Already have an account?{' '}
                        <NavLink to="/login" className="underline text-tertiary">
                            Login
                        </NavLink>
                    </p>
                    
                    
                </div>
            </div>
        </section>
    </main>
  )
}

export default Signup