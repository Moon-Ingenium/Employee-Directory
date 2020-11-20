import React from "react";

function Row(props) {
    return (
        <tbody>
            <tr>
                <th scope="row">{props.id}</th>
                <th scope="row">{props.name}</th>
                <th scope="row">{props.occupation}</th>
                <th scope="row">{props.location}</th>
            </tr>
        </tbody>
    );
}
export default Row;