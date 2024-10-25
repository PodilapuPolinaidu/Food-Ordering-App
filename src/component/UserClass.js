import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PodilapuPolinaidu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
componentDidUpdate(){
  
}

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
       {avatar_url && <img src={avatar_url} />}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9391669315</h4>
      </div>
    );
  }
}

export default UserClass;
