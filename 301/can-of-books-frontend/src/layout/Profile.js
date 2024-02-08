import { withAuth0 } from "@auth0/auth0-react";
import { Component } from "react";

class Profile extends Component {
  render() {
    const { user, isAuthenticated, isLoading } = this.props.auth0;

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    );
  }
}

export default withAuth0(Profile);
