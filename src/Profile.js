import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import {Card} from 'react-bootstrap'
class Profile extends Component {


  render() {
   return(
    <Card>
      NameL:{this.props.auth0.user.name}
      Email: {this.props.auth0.user.email}
      </Card>)
  }
};

export default withAuth0(Profile);