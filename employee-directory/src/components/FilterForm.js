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
              <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
          </div>
          )
      }
    
    }   
    export default FilterForm