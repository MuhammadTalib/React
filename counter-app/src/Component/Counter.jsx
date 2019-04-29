import React, { Component } from "react";
export default class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <React.Fragment>
        {/*}   {this.state.tags.length === 0 && "Please Create a New Tag"}
        {this.renderTags()}{" "}*/}
        <span className={this.getClassBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm "
        >
          +
        </button>
        <button
          onClick={() => this.handleIncrement(0)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      </React.Fragment>
    );
  }

  decrement = () => {
    return this.state.count > 0
      ? this.setState({ count: this.state.count - 1 })
      : "";
  };

  handleIncrement = product => {
    product === 0
      ? this.decrement()
      : this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  getClassBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no Tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}
