import React from "react";

function Table(props) {
    return (
        <table className="table table-dark">
            <thead>

                <tr>
                    <th scope ="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Email</th>
                    
                </tr>
            </thead>
                {props.children}
        </table>
    );
}
export default Table;