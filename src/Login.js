import './Login.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login(){
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return(
        <div className="login">
            <div className="heading1">Log In to Your Account</div>
            <div className="inputbox">
                <div className="inputdesc">
                Enter your username:
                </div>
                <input type="text" onChange={(e)=>setUsername(e.target.value)}></input>
                <div className="inputdesc">
                Enter your password:
                </div>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}></input>
                <div>
                    <input type="checkbox" className="checkbox"></input>
                    Remember me
                </div>
                <div style={{color:'red', textAlign:'center'}}>{error}</div>
                <div className="button" onClick={()=>login()}>Log In</div>
            </div>
        </div>
    );

    function login(){
        if(!localStorage.getItem('username') || !localStorage.getItem('password')){
            setError('Please sign Up!');
        }
        if(localStorage.getItem('username') && localStorage.getItem('password')){
            if(localStorage.getItem('username') != username || localStorage.getItem('password') != password){
                setError('Invalid Credentials!');
            }
            else if(localStorage.getItem('username') == username && localStorage.getItem('password') == password){
                setError('');
                localStorage.setItem('isLoggedIn',true);
                history.push("/feature");
            }
        }
    }

    
}