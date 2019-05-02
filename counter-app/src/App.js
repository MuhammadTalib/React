import React, { Component } from "react";
import Navbar from "./Component/navbar";
import "./App.css";
import Counters from "./Component/Counters";

class App extends Component {
  constructor() {
    super();
    console.log("Component - constructed");
  }
  componentDidMount() {
    console.log("App - Mounted");
  }
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 8 },
      { id: 4, value: 0 },
      { id: 5, value: 4 }
    ]
  };
  handleDelete = count => {
    const counters = this.state.counters.filter(a => a.id !== count);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = { ...counter };

    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
