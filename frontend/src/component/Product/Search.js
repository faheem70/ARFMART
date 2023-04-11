import React, { useState, Fragment } from "react";
//import MetaData from "../layout/Metadata";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/Metadata";

const Search = () => {
  const history = useNavigate();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/products/${keyword}`);
    } else {
      history("/products");
    }
  };
  return (
    <Fragment>
      <MetaData title="Search A Product -- ARF MART"/>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;