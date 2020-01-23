import React, { Component } from "react";
import Table from "./components/table";
import Load from "./components/load/load";
import RowInfo from "./components/rowInfo";
import Mode from "./components/mode";
import Search from "./components/search";
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
      sortValue: " "
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

  onSearch = searchVal => console.log(searchVal);

  // обработка клтика паггинации
  handlePageClick = ({ selected }) => {
    this.setState({ page: selected });
  };

  render() {
    const { data, load, row, modeData, page } = this.state;
    const newData = _.chunk(data, rowSize)[page];
    //
    //
    //

    if (!modeData) {
      return (
        <div className="container">
          <Mode onMode={this.onMode} />
        </div>
      );
    } else
      return (
        <main>
          {data.length > rowSize ? (
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={20}
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
            />
          ) : null}
          <Search onSearch={this.onSearch} />
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
        </main>
      );
  }
}
export default App;
