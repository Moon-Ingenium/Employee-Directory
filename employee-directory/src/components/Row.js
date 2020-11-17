import React from "react";

function Row(props) {
    return (
        <tbody>

            <tr>
            <th scope="row">id={props.employees.id}</th>
            <th scope="row">key={props.employees.id}</th>
            <th scope="row">name={props.employees.name}</th>
            <th scope="row">occupation={props.employees.occupation}</th>
            <th scope="row">location={props.employees.location}</th>
            </tr>
          
        </tbody>
    );
}
export default Row;