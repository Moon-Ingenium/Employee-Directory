import React, { Component } from "react";
import Table from "./components/Table";
import Row from "./components/Row";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };
  // filter 
  employeeName = name => {
    const employees = this.state.employees.filter(employee => employee.name);

    this.setState({ employees });
  };


  render() {
    return (
      <Table>
        {this.state.employees.map(employee => (
          <Row

            id={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            location={employee.email}
              />
         ))}

      </Table>
    );
  }
}

export default App;

