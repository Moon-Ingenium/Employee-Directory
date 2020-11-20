import React from "react";

function Table(props) {
    return (
    <div>
        <table className="table table-dark">
          <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col" onClick= {props.handleSort}>Occupation</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            {props.children}
        </table>
        </div>
    );
}
export default Table;