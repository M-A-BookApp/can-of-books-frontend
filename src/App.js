import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from "./BestBooks.js"
import Login from './Login.js';
import Profile from './Profile.js';
import LoginButton from './LoginButton.js';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }




  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
 { this.state.user ?  <BestBooks/> : <Login loginHandler={this.loginHandler } />}
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
  
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;