import React from "react";
import Row from "./Row";

function Table(props) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>

        </table>
    );
}
export default Table;