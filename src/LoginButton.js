import React from 'react';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

class LoginButton extends Component {
  render() {
    return (
      <Button variant="success" onClick={this.props.auth0.loginWithRedirect}>Log In</Button>
    );
  }
}
export default withAuth0(LoginButton);

