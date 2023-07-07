import React, { Component } from "react";
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link to="/dropdown">Show Character Dropdown</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}

export default HeaderComponent 
