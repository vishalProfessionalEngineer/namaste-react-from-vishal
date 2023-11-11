import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name: "Dum",
            url: "default",
        }
    };

    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount");
    // It's get called at the end of render.

    const data = await fetch("https://api.github.com/users/vishalProfessionalEngineer");
    const json = await data.json();
    console.log(json);

    this.setState({
        userInfo: json
    });
  }

  render() {
    // console.log("Child Render");
    const { name, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {url}</h3>
        <h4>Email: vishalsavita2707@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
