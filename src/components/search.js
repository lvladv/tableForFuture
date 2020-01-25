import React, { createRef } from "react";

const Search = props => {
  let searchVal = createRef();
  return (
    <form className="my-3 form-inline">
      <div className="form-group">
        <input
          ref={searchVal}
          type="text"
          className="my-3 ml-3 form-control  "
        />
        <button
          className="ml-2 btn btn-secondary"
          onClick={(e) => {
            props.onSearch(searchVal.current.value);
            e.preventDefault();

            searchVal.current.value = "";
          }}
        >
          Искать
        </button>
      </div>
    </form>
  );
};

export default Search;
