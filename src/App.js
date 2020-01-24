import React, { Component } from "react";
import Table from "./components/table";
import Load from "./components/load/load";
import RowInfo from "./components/rowInfo";
import Mode from "./components/mode";
import Search from "./components/search";
import AddRow from "./components/addRow/addRow";
import ReactPaginate from "react-paginate";
import _ from "lodash";

const rowSize = 50;

class App extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      data: [],
      row: null,
      modeData: false,
      page: 0,
      sort: "asc",
      sortValue: " ",
      search: "",
      addButtonRow: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      },
      buttonAdd: false
    };
  }

  async fetchData(url) {
    let response = await fetch(`${url}`);
    let data = await response.json();
    this.setState({
      load: false,
      data
    });
  }
  // передача значения url  в fetch
  onMode = url => {
    this.setState({ modeData: true });
    this.fetchData(url);
  };

  // сортировка

  onSort = sortValue => {
    const SORT_DATA = this.state.data.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";
    const orderData = _.orderBy(SORT_DATA, sortValue, sortType);
    this.setState({
      data: orderData,
      sort: sortType,
      sortValue
    });
  };

  // поиск строки
  onRowInfo = row => this.setState({ row });
  //  поиск по названию
  onSearch = searchVal => {
    this.setState({
      page: 0,
      search: searchVal
    });
  };
  getFilterData = () => {
    const { data, search } = this.state;
    if (!search) {
      return data;
    }
    let result = data.filter(item => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        String(item["id"])
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase()) ||
        String(item["phone"])
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    if (result.length === 0) {
      alert("ничего такого нет");
      return data;
    } else return result;
  };

  // обработка клтика паггинации
  handlePageClick = ({ selected }) => {
    this.setState({ page: selected });
  };
  // обработака кнопки добавить

  componentDidMount() {
    this.setState(this.getRow());
  }

  componentDidUpdate() {
    this.onAddRow();
  }

  onAddRow = (id, firstName, lastName, email, phone) => {
    const { data } = this.state;
    data.push({
      id,
      firstName,
      lastName,
      email,
      phone
    });
  };

  getRow = (id, firstName, lastName, email, phone) => {
    // проверка заполненнсти форм
    const { addButtonRow, buttonAdd } = this.state;

    if (
      String(id).length > 0 &&
      String(firstName).length > 0 &&
      String(lastName).length > 0 &&
      String(email).length > 0 &&
      String(phone).length > 0
    ) {
      this.setState({
        addButtonRow: { id, firstName, lastName, email, phone },
        buttonAdd: true
      });
    }
  };

  render() {
    const { data, load, row, modeData, page, addButtonRow } = this.state;
    console.log(data);
    const filterData = this.getFilterData();
    const newData = _.chunk(filterData, rowSize)[page];
    const pageCount = Math.ceil(filterData.length / rowSize);
    const addReactPaginate =
      data.length > rowSize ? (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={page}
        />
      ) : null;

    if (!modeData) {
      return (
        <div className="container">
          <Mode onMode={this.onMode} />
        </div>
      );
    } else
      return (
        <main>
          <Search onSearch={this.onSearch} />
          <AddRow getRow={this.getRow} />
          {this.state.buttonAdd ? (
            <button
              onClick={this.onAddRow(
                addButtonRow.id,
                addButtonRow.firstName,
                addButtonRow.lastName,
                addButtonRow.email,
                addButtonRow.phone
              )}
            >
              Добавить в таблицу
            </button>
          ) : null}
          {addReactPaginate}
          {load ? (
            <Load />
          ) : (
            <Table
              data={newData}
              onRowInfo={this.onRowInfo}
              onSort={this.onSort}
            />
          )}
          {row ? <RowInfo row={row} /> : null}
          {addReactPaginate}
        </main>
      );
  }
}
export default App;
