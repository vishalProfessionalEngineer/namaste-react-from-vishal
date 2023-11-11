import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"React using class based component"} location={"Kanpur"} />
      </div>
    );
  }
}

export default About;


/**
    -Parent Constructor
    -Parent Render

        -First Child Constructor
        -First Child Render

        -Second Child Constructor
        -Second Child Render

        <DOM UPDATED - IN SINGLE BATCH>

        -First Child DidMount Called
        -Second Child DidMount Called

    -Parent DidMount Called
 */