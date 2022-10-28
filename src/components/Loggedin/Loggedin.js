
import React, { useRef } from 'react';

import initializeAuthentication from '../../Firebase/firebase.initialize';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { useNavigate } from 'react-router-dom';
import './Loggedin.css';
import Usefirebase from '../../Hook/Usefirebase';

initializeAuthentication();


const auth = getAuth();



const Loggedin = () => {
    const { signInUsingGoole } = Usefirebase();
    const { user } = useAuth();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const [error, setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const [users, setUsers] = useState({
        name: "",
        email: "",
        uid: "",
    });
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({});
            })
    }

    const toggleLogin = e => {
        setIslogin(e.target.checked);
    }
    const navigate = useNavigate();


    return (

        <div className="container mx-auto w-50">
            {/* <h3 className='text-primary my-2'>Please {islogin ? 'Login' : 'Register'}</h3>

            <br />
            <br /> */}
            <br />
            <h2>Please Log in</h2>
            {user?.displayName || user.uid ?
                <button onClick={handleSignOut} className='btn btn-primary m-2'>  Sign Out</button>
                :
                <div>
                    <button onClick={signInUsingGoole} className='btn btn-primary m-2'> Google Sign in</button>

                </div>
            }
            <br />

            <br />
            <br />
            <br />

        </div>


    );
};

export default Loggedin;