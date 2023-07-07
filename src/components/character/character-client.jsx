    import React, {Component} from "react";
    import '../../bootstrap.css';
    import 'bootstrap/dist/css/bootstrap.css';
    import ListUniqueHousesComponent from "./ListUniqueHousesComponent";
    import DropdownHousesComponent from "./DropdownHousesComponent";

    class CharacterClient extends Component{
        render(){
            return(
                <div className="CharacterClient">
                    <HeaderComponent/>
                    <DropdownHousesComponent/>
                </div>
            )
        }
    }

    class HeaderComponent extends Component{
    render(){
        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>Header</div>
                    </nav>
                </header>
            )
    }
    }


    class FooterComponent extends Component{
    render(){
        return(
            <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>Footer</div>
            </nav>
        </header>
    )
    }
    }


    export default CharacterClient;