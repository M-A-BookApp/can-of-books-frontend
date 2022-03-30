import { Component } from 'react'
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm.js';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true
    }
  }
  handleClick = () => {
    this.setState({ showButton: false })
  }
  render() {
    if (this.state.showButton) {

      return <Button onClick={this.handleClick}> Login Please</Button>

    } else {
      return <LoginForm loginHandler={this.props.loginHandler} />

    }



  }
};