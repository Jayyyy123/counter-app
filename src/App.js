import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters }); // set state of counters
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); // set state of counters
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // set counter values
    const index = counters.indexOf(counter); // set constant index
    counters[index] = { ...counter }; // set index
    counters[index].value++; // index increment
    this.setState({ counters }); // set state of counters
  };

  handleRestart = () => {
    window.location.reload();
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
