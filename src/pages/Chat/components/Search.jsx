import { BackIcon, SearchIcon } from "assets/svgs";

import React from "react";

const Search = () => {
  return (
    <>
      <div className="search-wrapper">
        <div className="search-icons">
          <SearchIcon className="search-icon" />
          <button className="search__back-btn">
            <BackIcon />
          </button>
        </div>
        <input className="search" placeholder="Search..." />
      </div>
      <div className="chat-sidebar__search-results">
        <p> Search for messages with Karen Okonkwo.</p>
      </div>
    </>
  );
};

export default Search;
