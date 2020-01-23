import React from "react";

const  Table =  props => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              id{" "}
              <span className="sort" onClick={()=> props.onSort("id")}>
                {" "}
              </span>
            </th>
            <th>
              firstName
              <span className="sort" onClick={()=> props.onSort("firstName")}>
                {" "}
              </span>
            </th>
            <th>
              lastName
              <span className="sort" onClick={()=> props.onSort("lastName")}>
                {" "}
              </span>
            </th>
            <th>
              email
              <span className="sort" onClick={()=> props.onSort("email")}>
                {" "}
              </span>
            </th>
            <th>
              phone
              <span className="sort" onClick={()=> props.onSort("phone")}>
                {" "}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item => (
            <tr
              key={item.phone}
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
