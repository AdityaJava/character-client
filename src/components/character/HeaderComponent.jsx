import React, { Component } from "react";
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <ul className="navbar-nav navbar-collapse">
                            <li className="nav-link ">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-link ">
                                <Link to="/dropdown">Dropdown</Link>
                            </li>
                            <li className="nav-link ">
                                <Link to="/showAll">AllCharacters</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

export default HeaderComponent 
