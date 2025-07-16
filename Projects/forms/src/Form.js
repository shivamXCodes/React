import { Component } from "react";

//Mount =>birth
//update =>lifespan
//Unmount =>death
export let obj = {
  name: "riya",
  age: 10,
};

export default class Form extends Component {
  constructor() {
    console.log(">>>>Constructor", "Mounting");
    super();
    this.state = {
      name: "",
      heading: "",
    };
  }
  handleInput = (e) => {
    console.log(e.target.value, "value");
    this.setState({ name: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.fName.value, "ele");
    this.setState({ heading: this.state.name });
  };
  render() {
    console.log(">>>>render", this.state);
    return (
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        {/* uncontrolled input */}
        {/* <input type="text" name="fName" value="" /> */}
        <h1> {this.state.heading}</h1>
        {/* controlled input */}
        <input
          type="text"
          name="fName"
          value={this.state.name}
          onChange={(e) => this.handleInput(e)}
        />
        <label>Name</label>
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
