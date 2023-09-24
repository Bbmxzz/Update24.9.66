import React from 'react';
import Text from '../elements/Text';
import Button from '../elements/Button';
import {  signOut } from "firebase/auth";
import {auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
                

        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });

    }
    
    return(
        <>
        <div className="backgroundcolor">
            <nav className="text-right ">
                <Button onClick={handleLogout} className="box4">
                    Logout
                </Button>
            </nav>
        </div>
        </>
    )
}

export default Navbar;

//<Text className="">
    //Welcome, <span className="italic"> Username </span>
//</Text>
