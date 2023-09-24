import React, {useState} from 'react';
import Text from '../components/elements/Text';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import "./styles1.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
            return{user}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert('Invalid Username or Password')
        });
        
    }

    return(
        <>
            <main >        
                <section>
        
                    <div className="App ">
                        <div className="w-full max-w-md space-y-8">
                            <div>

                                <h2 className="size-head ">
                                <br/><br/>Good to see you again<br/><br/>
                                </h2>                   
                            </div>
                            
                            <form className="text-center" >                            
                                <div className=" space-y-5 rounded-md shadow-sm">

                                    <div>
                                        <label htmlFor="email-address" className="small-log">
                                        Email address&emsp;
                                        </label><br/>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"                                    
                                            required                                            
                                            className="text-input"
                                            placeholder="Email address"
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="small-log ">
                                        <br/>Password &nbsp;&nbsp;&nbsp;&emsp;&emsp;
                                        </label><br/>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"                                    
                                            required                                            
                                            className="text-input"
                                            placeholder="Password"
                                            onChange={(e)=>setPassword(e.target.value)}
                                        /><br/><br/>
                                    </div>
                                </div>                        
                            </form>

                            <form className="text-center" >  
                                <div>
                                    <button                                     
                                        onClick={onLogin}
                                        className="lead boxx"
                                    >      
                                        Login                                                                  
                                    </button>
                                </div>
                            </form>

                            <p className="smaller ">
                                No account yet?{' '}
                                <NavLink to="/" className="underline text-tertiary">
                                    Sign up
                                </NavLink>
                            </p><br/>
                            <p className="smaller text-bottom ">
                                <br/><br/><br/><br/><br/>Teacher {' '}
                                <NavLink to="/teacher" className="underline text-tertiary">
                                    Login
                                </NavLink>
                    </p>
                        </div> 
                    </div>
                    </section>
            </main>
        </>
    )

}

export default Login