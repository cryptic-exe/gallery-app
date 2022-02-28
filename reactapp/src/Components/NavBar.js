import React from "react";
import SearchBar from "./SearchBar";

export default function NavBar({ setPhoto, photo, changePhoto, result }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Image Gallery
          </a>
          <SearchBar
            setPhoto={setPhoto}
            photo={photo}
            changePhoto={changePhoto}
            result={result}
          />
        </div>
      </nav>
    </div>
  );
}
