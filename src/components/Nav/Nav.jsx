import React from "react";
import SearchBar from "../search/SearchBar";
import styles from "./Nav.module.css"

let {nav}=styles;

const Nav = ( {onSearch} ) => {
    return(
        <div className={nav}>
            <SearchBar onSearch={ onSearch }></SearchBar>
        </div>
    );
}

export default Nav;