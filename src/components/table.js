import React from "react";

const  Table =  props => {
    return (
    
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              id{" "}
              <span className={(props.sort === "asc") ? "up" : "down"} onClick={()=> props.onSort("id")}>
                {" "}
              </span>
            </th>
            <th>
              firstName
              <span className={(props.sort === "asc") ? "up" : "down"}onClick={()=> props.onSort("firstName")}>
                {" "}
              </span>
            </th>
            <th>
              lastName
              <span className={(props.sort === "asc") ? "up" : "down"} onClick={()=> props.onSort("lastName")}>
                {" "}
              </span>
            </th>
            <th>
              email
              <span className={(props.sort === "asc") ? "up" : "down"} onClick={()=> props.onSort("email")}>
                {" "}
              </span>
            </th>
            <th>
              phone
              <span className={(props.sort === "asc") ? "up" : "down"} onClick={()=> props.onSort("phone")}>
                {" "}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item => (
            <tr
              key={item.phone+item.email}
              onClick={(()=>props.onRowInfo(item))}
            >
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }


export default Table;
