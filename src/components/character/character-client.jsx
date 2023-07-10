import React, { Component } from "react";
import '../../bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownHousesComponent from "./DropdownHousesComponent";

class CharacterClient extends Component {
    render() {
        return (
            <div className="CharacterClient">
                <HeaderComponent />
                <DropdownHousesComponent />
            </div>
        )
    }
}



export default CharacterClient;