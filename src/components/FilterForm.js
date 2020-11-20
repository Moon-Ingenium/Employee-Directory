import React, { Component } from "react";

const styles= {
  fontWeight: 'bold'
}

class FilterForm extends Component {
    
      render() {
        return (
          <div className = "d-flex justify-content-center">
            <label style = {styles}htmlFor="filter" >Filter by Name: </label>
            <input type="text" id="filter" 
              onChange={this.props.handleChange}
              />
          </div>
          )
      }
    
    }   
    export default FilterForm