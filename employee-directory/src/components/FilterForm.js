import React, { Component } from "react";

const styles= {
  marginLeft: "50px",
  fontWeight: 'bold'
}

class FilterForm extends Component {
    
      render() {
        return (
          <div>
            <label style = {styles}htmlFor="filter" >Filter by Name: </label>
            <input type="text" id="filter" 
              onChange={this.props.handleChange}
              />
          </div>
          )
      }
    
    }   
    export default FilterForm