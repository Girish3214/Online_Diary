import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    return (
        <header className="title">
            <h1 className="title-name" to="/">Online Diary</h1>
            <div className="options">
                <NavLink className="option-name" exact to="/">Home</NavLink>
                <NavLink className="option-name" exact to="/users/add">Add</NavLink>
                <NavLink className="option-name" exact to="/users/search">Search</NavLink>                
            </div>
        </header>
    )
}

export default Header
