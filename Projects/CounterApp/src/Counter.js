import { Component } from "react";

export default class Counter extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 0,
      name: "Rohan",
    };
  }

  increase = () => {
    this.setState((prev) => ({
      count: prev.count + this.props.diff,
    }));

    console.log(this.state.count);
  };
  decrease = () => {
    this.setState((prev) => ({
      count: prev.count - this.props.diff,
    }));
    console.log(this.state.count);
  };
  changeName = () => {
    this.setState({ name: "shivam" });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        {this.state.count}
        <button onClick={this.increase}>+</button>
        <br />
        {this.state.name}
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}
