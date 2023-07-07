import React, { Component, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import CharacterService from "./api/CharacterService";
import { Button } from "bootstrap";

class DropdownHousesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            houses: [],
            familyTree: [],
            childNames: []
        }
        this.retreieveFamilyTree = this.retreieveFamilyTree.bind(this)
        this.handleGetChildrenCLick = this.handleGetChildrenCLick.bind(this)
    }

    componentDidMount(){
        CharacterService.retrieveAllHousesService()
        .then(response =>{
            this.setState({
                houses : response.data
            })
        })

    }

    render(){
        return (  
            <div className="container">

            <div className="MyDropdown">
                <select class="form-select" aria-label="Default select example" onChange={this.retreieveFamilyTree}>
                    <option selected>Select House</option>
                    {
                        this.state.houses.map(house =>{
                            return <option value={house.houseName}>{house.houseName}</option>
                        })
                    }
                </select>
            </div>
            <div>
            <table className="table">
                    <thead>
                        <tr>
                            <th>CharacterId</th>
                            <th>CharacterName</th>
                            <th>CharacterChildrens</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.familyTree.map( character =>
                                <tr>
                                    <td>{character.characterId}</td>
                                    <td>{character.characterName}</td>
                                    <td>
                                        <button onClick={() => this.handleGetChildrenCLick(character.characterChildList)}>
                                            Get Child List
                                        </button>
                                    </td>
                                    <td>
                                        {
                                        this.state.childNames.map(childName => 
                                            childName)
                                        }
                                    </td>
                                </tr>
                                )
                            }
                    </tbody>
                </table>

            </div>
            </div>
        )
    }

    retreieveFamilyTree(e){
        CharacterService.retrieveFamilyTree(e.target.value)
        .then(response =>{
            this.setState({
                familyTree: response.data
            })
        })
    }
    handleGetChildrenCLick(characterChildList){
        let listTemp = [];
        characterChildList.map(child =>{
           CharacterService.getCharacterById(child.characterId)
           .then(response =>{
            console.log(response.data.characterName)
            listTemp.push(response.data.characterName)
            console.log("inside"+  listTemp)
            this.setState({
                childNames: listTemp
        })
           })
        })
        console.log("outside"+  listTemp)
        this.setState({
            childNames: listTemp
    })

    }
}
export default DropdownHousesComponent;