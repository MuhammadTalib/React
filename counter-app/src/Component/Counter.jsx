import React, { Component } from "react";

import { Col, Row } from "reactstrap";
export default class Counter extends Component {
  state = {
    tags: []
  };

  componentDidUpdate(prevprops, prevstates) {
    console.log("prevProps", prevprops);
    console.log("prevState", prevstates);
  }
  componentWillUnmount() {
    console.log("Counter - Un Mount");
  }
  render() {
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getClassBadge()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0}
            className="btn btn-secondary btn-sm m-2"
          >
            Decrement
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  enable = () => {
    return true;
  };
  decrement = () => {
    return this.props.counter.value > 0
      ? this.setState({ value: this.props.counter.value - 1 })
      : "";
  };

  getClassBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
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
