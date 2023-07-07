
import CharacterService from "./api/CharacterService";
import React, { Component } from "react";

class ListUniqueHousesComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveMessaged = this.retrieveMessaged.bind(this)
        this.state = {
            houses :[]
        }
    }

    componentDidMount(){
        CharacterService.retrieveAllHousesService()
        .then(response =>{
            console.log(response.data)
            this.setState({
                houses : response.data
            })
        })
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
                                    <td>{house.houseId}</td>
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
        CharacterService.retrieveAllHousesService()
        .then(response => console.log(response));
    }

}

export default ListUniqueHousesComponent;
