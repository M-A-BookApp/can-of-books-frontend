import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Profile from './Profile.js';
// import LoginForm from './LoginForm.js';
import Login from './Login.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  loginHandler = (user) => {
    this.setState({
      user,
    });
  }
  logoutHandler = () => {
    this.setState({
      user: null,
    });
  }
  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks /> : <Login loginHandler={this.loginHandler} />}
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.props.auth0.isAuthenticated
                ? <LogoutButton />
                : <LoginButton />}
            </Route>
            <Route exact path="/Profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              {this.props.auth0.isAuthenticated
                ? <Profile />
                : <h2>Please Log In</h2>}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
