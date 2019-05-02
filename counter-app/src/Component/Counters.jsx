import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-sm btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
