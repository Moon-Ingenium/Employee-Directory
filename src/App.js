import React, { Component } from "react";
import Table from "./components/Table";
import Row from "./components/Row";
import employees from "./employees.json";
import FilterForm from "./components/FilterForm";


class App extends Component {
  state = {
    employees,
    filteredEmployees: [...employees]
  };

  handleChange = (e) => {
    this.setState({
      filteredEmployees: this.state.employees.filter(employee => employee.name.includes(e.target.value))
    })
  }
  handleSort = (e) => {
    this.setState({
      filteredEmployees: this.state.employees.sort(function (a, b) {
        const occupationA = a.occupation.toUpperCase();
        const occupationB = b.occupation.toUpperCase();
        if (occupationA < occupationB) {
          return -1;
        }
        if (occupationA > occupationB) {
          return 1;
        }

        return 0;
      })
    })
  }

  render() {
    const employees = this.state.filteredEmployees || this.state.employees;
    return (<div className="container">
      <FilterForm handleChange={this.handleChange} />
      <Table handleSort={this.handleSort}>
        {employees.map(employee => (
          <Row
            key={employee.id}
            id={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            email={employee.email}
          />
        ))}
      </Table>
    </div>
    );
  }
}

export default App;

