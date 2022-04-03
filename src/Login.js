import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Welcome</Card.Title>
          <Card.Text>
            Click Below to Log in
          </Card.Text>
          <LoginButton loginHandler={this.props.loginHandler} showButton={this.props.showButton}/>
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
