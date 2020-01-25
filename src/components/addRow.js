import React, { createRef, Component } from "react";

class AddRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addButtonRow: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      },
      openForm: false
    };
  }

  valID = createRef();
  valFirsName = createRef();
  valLastName = createRef();
  valEmail = createRef();
  valPhone = createRef();
  getOF = () => {
    const { openForm } = this.state;
    this.setState(openForm ? { openForm: false } : { openForm: true });
  };

  getRB = () =>
    this.setState({
      addButtonRow: {
        id: this.valID.current.value,
        firstName: this.valFirsName.current.value,
        lastName: this.valLastName.current.value,
        email: this.valEmail.current.value,
        phone: this.valPhone.current.value
      }
    });
  putRowToTab = event => {
    event.preventDefault();
    const { addButtonRow } = this.state;
    this.props.onAddRow(
      addButtonRow.id,
      addButtonRow.firstName,
      addButtonRow.lastName,
      addButtonRow.email,
      addButtonRow.phone
    );
    this.valID.current.value ="";
    this.valFirsName.current.value =""
    this.valLastName.current.value=""
    this.valEmail.current.value=""
    this.valPhone.current.value = ""
  };
  render() {
    const { openForm, addButtonRow } = this.state;
    if (!openForm) {
      return <button className="btn btn-secondary ml-5 mb-5" onClick={this.getOF}>Добавить</button>;
    } else {
      return (
        <div className="col-sm-12 mx-auto">
          <button className="btn btn-info ml-3 " onClick={this.getOF}>Добавить</button>
          <form className="form-inline " onChange={this.getRB}>
            <input
              ref={this.valID}
              className="mx-3 my-3 col-2 form-control"
              type="text"
              placeholder="id"
            ></input>
            <input
              ref={this.valFirsName}
              className="mx-3 my-3 col-2 form-control"
              type="text"
              placeholder="firstName"
            ></input>
            <input
              ref={this.valLastName}
              className="mx-3 my-3 col-2 form-control"
              type="text"
              placeholder="lastName"
            ></input>
            <input
              ref={this.valEmail}
              className="mx-3 my-3 col-2 form-control"
              type="text"
              placeholder="email"
            ></input>
            <input
              ref={this.valPhone}
              className="mx-3 my-3 col-2 form-control"
              type="text"
              placeholder="phone"
            ></input>
            {String(addButtonRow.id).length > 0 &&
            String(addButtonRow.firstName).length > 0 &&
            String(addButtonRow.lastName).length > 0 &&
            String(addButtonRow.email).length > 0 &&
            String(addButtonRow.phone).length > 0 ? (
              <button  class="btn btn-secondary btn-sm  mx-auto col-8" onClick={this.putRowToTab}>Добавить в таблицу</button>
            ) : null}
          </form>
        </div>
      );
    }
  }
}

export default AddRow;
