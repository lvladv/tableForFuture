import React from "react";

const List = ({ data }) =>
  data.map(data => (
    <tr key = {data.email}>
      <td> {data.id} </td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  ));

export default List;
