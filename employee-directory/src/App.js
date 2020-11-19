import React, { Component } from "react";
import Table from "./components/Table";
import Row from "./components/Row";
import employees from "./employees.json";
import FilterForm from "./components/FilterForm";

class App extends Component {
  state = {
    employees,
    name: '',
    filteredEmployees: [...employees]
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      filteredEmployees: this.state.employees.filter(employee => employee.name === e.target.value)
    })
    
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      name:""
    });
  };

  render() {
    const employees = this.state.filteredEmployees || this.state.employees;
    return (<div>
      <FilterForm handleChange={this.handleChange} handleFormSubmit = {this.handleFormSubmit}/>
      <Table>
        {employees.map(employee => (
          <Row

            id={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            location={employee.email}
          />
        ))}

      </Table>
      </div>
    );
  }
}

export default App;

