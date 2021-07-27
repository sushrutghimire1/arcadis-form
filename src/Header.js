import './Header.css';
import Logo from './images/download.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function ResponsiveHeader(){
  const history = useHistory();
  return(
    <div class="rheader">
  <a href="#default" class="logo">Arcadis</a>
  <div class="header-right">

    <a onClick={()=>{
       history.push("/feature");
    }
    }>Solutions</a>
    <a onClick={()=>{
       history.push("/signup");
    }
    }>Sign Up</a>
    <a onClick={()=>{
       history.push("/");
    }
    }>Log In</a>
    <a class="active" onClick={()=>{
        localStorage.clear();
        history.push("/");
    }}>Logout</a>
  </div>
</div>
  )

}


function Menus(){
    var menus = ['Products', 'Solutions', 'Resources', 'Plans and Pricing'];
    return(
        <div className="menus">
            {menus.map(menu=><Link to={'/feature'} className="menu">{menu}</Link>)}
        </div>
    );
}

function SignUpAndLogin(){
    return(
        <div className="signUpAndLogin">
          
          <Link to={'/'} className="logIn"> Login </Link>
          <Link to={'/signup'} className="signUp">Sign Up</Link>
        </div>
    );
}

function LogOut(){
  const history = useHistory();
  return(
    <div className="signUpAndLogin">
      <div className="signUp" onClick={()=>{
        localStorage.clear();
        history.push("/");
      }}>Log Out</div>
    </div>
);
}


function Header() {
  return (
    <div>
    <div className="header">
      <img src={Logo} className="logo"/>
      <Menus/>
      {!localStorage.getItem('isLoggedIn') && <SignUpAndLogin/>}
      {localStorage.getItem('isLoggedIn') && <LogOut/>}
    </div>
   <ResponsiveHeader/>
   </div>
  );
}

export default Header;
