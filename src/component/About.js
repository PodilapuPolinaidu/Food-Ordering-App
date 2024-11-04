import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "./UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste react series</h2>
        <UserClass name={"Polinaidu (class)"} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
