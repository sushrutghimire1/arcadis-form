import './App.css';
import Header from './Header';
import Footer from './Footer';
import SignUp from './SignUp';
import Login from './Login';
import Welcome from './Welcome';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    
      <Switch>
       <Route exact path='/signup' component={SignUp} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/' component={Login} />
       <Route exact path='/feature' component={Welcome} />
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
