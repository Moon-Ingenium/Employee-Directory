import React, { Component } from "react";
class FilterForm extends Component {
     state = {
        name: ""
      }
    
    

      render() {
        return (
          <div>
            <label htmlFor="filter">Filter by Name: </label>
            <input type="text" id="filter" 
              value={this.state.name} 
              onChange={this.props.handleChange}/>
          </div>
          )
      }
    
    }   
    export default FilterForm