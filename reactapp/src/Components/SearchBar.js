import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ setPhoto, photo, changePhoto }) {
  return (
    <div className="d-flex">
      <input
        className="form-control"
        type="text"
        value={photo}
        onChange={(e) => {
          setPhoto(e.target.value);
        }}
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={changePhoto}
      >
        <Link to={photo}>Search</Link>
      </button>
    </div>
  );
}

export default SearchBar;
