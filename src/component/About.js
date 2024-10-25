import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

   
  }

  componentDidMount() {
   
  }

  render() {
    
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste react series</h2>
        <UserClass name={"Polinaidu (class)"} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
