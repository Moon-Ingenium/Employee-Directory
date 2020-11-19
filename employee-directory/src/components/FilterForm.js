import React, { Component } from "react";

class FilterForm extends Component {
    
      render() {
        return (
          <div>
            <label htmlFor="filter">Filter by Name: </label>
            <input type="text" id="filter" 
              onChange={this.props.handleChange}
              />
          </div>
          )
      }
    
    }   
    export default FilterForm