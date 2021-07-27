import './SignUp.css';
import React, { useState } from 'react';

export default function SignUp(){
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return(
        <div className="signUpComponent">
            <div className="heading">Create a FREE Account</div>
            <div className="sub1" style={{width:"30%", float:'left', height:'12px'}}></div>
            <div className="sub" style={{float:'left'}}>Create an account</div>
            <div className="sub1" style={{width:"30%", float:'left', height:'12px'}}></div>
            <div className="sinputbox">
                <input type="text" placeholder="UserName" onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} style={{width:"43%"}}></input>
                <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} style={{width:"43%"}}></input>
                <div style={{color:'red', textAlign:'center'}}>{error}</div>
                <div className="button" onClick={()=>checkError()}>Create Account</div>
                
            </div>
        </div>
    );

    function checkError(){
        if(username==''){
            setError('Please enter username');
        }
        else if(password==''){
            setError('Please enter password');
        }
        else if(email=='' && !ValidateEmail(email)){
            setError('Please enter valid email');
        }
        else if(firstName==''){
            setError('Please enter first Name');
        }
        else if(lastName==''){
            setError('Please enter last Name');
        }
        else{
            setError('');
        }
        if(username!='' && password!='' && email!='' && firstName!='' && lastName!=''){
   
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        }
    }

    function ValidateEmail(mail) 
    {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mail.match(mailformat))
        {
            return (true)
        }
            return (false)
    }
}