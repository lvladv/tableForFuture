import React, { createRef } from "react";

const AddRow = props => {
  const valID = createRef();
  const valFirsName = createRef();
  const valLastName = createRef();
  const valEmail = createRef();
  const valPhone = createRef();

  return (
    <div className="col-sm-3">
      <form onChange = {() =>
          props.getRow(
            valID.current.value,
            valFirsName.current.value,
            valLastName.current.value,
            valEmail.current.value,
            valPhone.current.value
          )}>
        <input
          ref={valID}
          className="form-control"
          type="text"
          placeholder="id"
        ></input>
        <input
          ref={valFirsName}
          className="form-control"
          type="text"
          placeholder="firstName"
        ></input>
        <input
          ref={valLastName}
          className="form-control"
          type="text"
          placeholder="lastName"
        ></input>
        <input
          ref={valEmail}
          className="form-control"
          type="text"
          placeholder="email"
        ></input>
        <input
          ref={valPhone}
          className="form-control"
          type="text"
          placeholder="phone"
        ></input>
      </form>
     
      <button
        onClick={() =>
          props.onAddRow(
            valID.current.value,
            valFirsName.current.value,
            valLastName.current.value,
            valEmail.current.value,
            valPhone.current.value
          )
        }
      >
        Добавить в таблицу
      </button>{" "}
      )
    </div>
  );
};

export default AddRow;
