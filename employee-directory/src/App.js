import React, { Component } from "react";
import Table from "./components/Table";
import Row from "./components/Row";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };
  // filter example
  // removeEmployee = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(employee => employee.id !== id);
  // Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };

 
  render() {
    return (
      <Table>

          <Row>
           {this.state.employees.map(employee => (
              <tbody>

              <tr>
              <th scope="row">id={employee.id}</th>
              <th scope="row">key={employee.id}</th>
              <th scope="row">name={employee.name}</th>
              <th scope="row">occupation={employee.occupation}</th>
              <th scope="row">location={employee.location}</th>
              </tr>
            
          </tbody>
         
         ))}
         </Row>
      </Table>
    );
  }
}

export default App;

