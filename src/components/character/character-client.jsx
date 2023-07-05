    import React, {Component} from "react";
    import '../../bootstrap.css';
    import 'bootstrap/dist/css/bootstrap.css';
    import CharacterService from "./api/CharacterService";

    class CharacterClient extends Component{
        render(){
            return(
                <div className="CharacterClient">
                    <HeaderComponent/>
                    <ListUniqueHousesComponent/>
                    <FooterComponent/>
                </div>
            )
        }
    }


    class ListUniqueHousesComponent extends Component{
        constructor(props){
            super(props)
            this.retrieveMessaged = this.retrieveMessaged.bind(this)
            this.state = {
                houses :[{id:1, houseName: "test"}, {id:2, houseName: "test2"}]
            }
        }
        render(){
            return(
                <div>
                    <h1>Houses</h1>
                    <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>HouseName</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.houses.map( house =>
                                    <tr>
                                        <td>{house.id}</td>
                                        <td>{house.houseName}</td>
                                    </tr>
                                    )
                                }
                        </tbody>
                    </table>
                    </div>
                    <div className="container">
                                <button onClick={this.retrieveMessaged} className="btn btn-success">
                                    Click Here
                                </button>
                    </div>
                </div>
            )
        } 

        retrieveMessaged(){
            CharacterService.executeGetHousesService()
            .then(response => console.log(response));
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
            <div>
                <hr></hr>
                Footer
            </div>
        )
    }
}


    export default CharacterClient;