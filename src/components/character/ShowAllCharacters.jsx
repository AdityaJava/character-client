import { Button } from "bootstrap";
import React, { Component } from "react";
import CharacterService from "./api/CharacterService";

class ShowAllCharacters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            totalNumberOfPages: 0
        }
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this)
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    }


    componentDidMount() {
        CharacterService.getAllCharacters()
            .then(response => {
                console.log(response.data)
                this.setState({
                    characters: response.data.content,
                    currentPage: 0

                })
            })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>CharacterName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.characters.map(character =>
                                <tr>
                                    <td>{character.characterId}</td>
                                    <td>{character.characterName}</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td>
                                <button onClick={this.handlePreviousButtonClick}>
                                    PREV
                                </button>
                            </td>
                            <td>
                                <button onClick={this.handleNextButtonClick}>
                                    Next
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    handlePreviousButtonClick() {
        CharacterService.getAllCharactersWIthPaging(this.state.currentPage--)
            .then(response => {
                console.log(this.state.currentPage)
            })
    }

    handleNextButtonClick() {
        CharacterService.getAllCharactersWIthPaging(this.state.currentPage++)
            .then(response => {
                console.log(this.state.currentPage)
            })

    }


}

function previousButton(props) {
    <button onClick={this.handlePreviousButtonClick}>
        PREV
    </button>

}

export default ShowAllCharacters