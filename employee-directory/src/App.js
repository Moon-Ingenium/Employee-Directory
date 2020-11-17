import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import Row from "./components/Row";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  // removeEmployee = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(employee => employee.id !== id);
  // Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Table>

        {this.state.employees.map(employee => (
          <Row
          // // removeFriend={this.removeFriend}
          id={employee.id}
          key={employee.id}
          name={employee.name}
            occupation={employee.occupation}
          location={employee.location}
          />
        ))}
      </Table>
    );
  }
}

export default App;
