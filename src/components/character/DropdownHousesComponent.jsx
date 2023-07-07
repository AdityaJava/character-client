import React, { Component, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterService from "./api/CharacterService";
import { Button } from "bootstrap";
import '/node_modules/@syncfusion/ej2-layouts/styles/material.css';

class DropdownHousesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: [],
            familyTree: [],
            selectedChild: {},
            isChildSelected: false,
            isChildDataLoaded: false
        }
        this.retreieveFamilyTree = this.retreieveFamilyTree.bind(this)
        this.retrieveChilds = this.retrieveChilds.bind(this)
    }

    componentDidMount() {
        CharacterService.retrieveAllHousesService()
            .then(response => {
                this.setState({
                    houses: response.data
                })
            })

    }

    render() {
        return (
            <div className="container">

                <div className="MyDropdown">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <select class="form-select" aria-label="Default select example" onChange={this.retreieveFamilyTree}>
                                    <option selected>Select House</option>
                                    {
                                        this.state.houses.map(house => {
                                            return <option value={house.houseName}>{house.houseName}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">

                                <select class="form-select" aria-label="Default select example" onChange={this.retrieveChilds}>
                                    <option selected>Select Character</option>
                                    {
                                        this.state.familyTree.map(character => {
                                            return <option value={character.characterId}>{character.characterName}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div>
                            <CardComponent isChildSelected={this.state.isChildSelected} isChildDataLoaded={this.state.isChildDataLoaded} character={this.state.selectedChild} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    retreieveFamilyTree(e) {
        CharacterService.retrieveFamilyTree(e.target.value)
            .then(response => {
                this.setState({
                    familyTree: response.data
                })
            })
    }

    retrieveChilds(e) {
        this.setState({ isChildSelected: true })
        CharacterService.getCharacterById(e.target.value)
            .then(response => {
                console.log(response.data)
                this.setState({
                    selectedChild: response.data
                })
                this.setState({
                    isChildDataLoaded: true
                })
            })

    }


}

function CardComponent(props) {
    if (props.isChildSelected) {
        return (
            <div className="container">
                <div className="e-card" id="basic">
                    <div className="e-card-header">
                        <div className="e-card-header-caption">
                            Selected Child's Data Card
                        </div>
                    </div>
                    <div className="e-card-content">
                        {
                            <table>
                                <tr>
                                    <td style="text-align: center">
                                        "CharacterName:"
                                    </td>
                                    <td style="text-align: center">
                                        {
                                            props.character.characterName
                                        }
                                    </td>
                                </tr>

                                <tr>
                                    <td style="text-align: center">
                                        "ActorName:"
                                    </td>
                                    <td style="text-align: center">
                                        {
                                            props.character.actorName
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: center">
                                        "ActorLink:"
                                    </td>
                                    <td style="text-align: center">
                                        {
                                            props.character.actorLink
                                        }
                                    </td>
                                </tr>

                                <tr>
                                    <td style="text-align: center">
                                        "Nickname:"
                                    </td>
                                    <td style="text-align: center">
                                        {
                                            props.character.nickname
                                        }
                                    </td>
                                </tr>
                            </table>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return null
}
export default DropdownHousesComponent;