import React ,{createRef } from "react";

const Search = props => {
 let searchVal = createRef();
  return (
    <div>
      <input ref={searchVal} type="text" />
      <button onClick={() => props.onSearch(searchVal.current.value)}>
        Искать
      </button>
    </div>
  );
};

export default Search;
