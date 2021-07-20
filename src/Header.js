import './Header.css';
import Logo from './images/download.png';

function Menus(){
    var menus = ['Products', 'Solutions', 'Resources', 'Plans and Pricing'];
    return(
        <div className="menus">
            {menus.map(menu=><a href="" className="menu">{menu}</a>)}
        </div>
    );
}

function SignUpAndLogin(){
    return(
        <div className="signUpAndLogin">
        <div className="logIn">Login</div>
        <a className="signUp">Sign Up</a>
        </div>
    );
}

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo"/>
      <Menus/>
      <SignUpAndLogin/>
    </div>
  );
}

export default Header;
