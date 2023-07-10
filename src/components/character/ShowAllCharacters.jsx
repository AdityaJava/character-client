import { Button } from "bootstrap";
import React, { Component } from "react";
import CharacterService from "./api/CharacterService";
import favourite_star from "./images/favourite_star.png";
import unfav_star from "./images/unfav_star.png"

class ShowAllCharacters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            totalNumberOfPages: 0,
            currentPage: 0,
            favouriteStatusImage: { favourite_star }
        }
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this)
        this.handleUnFavouriteClick = this.handleUnFavouriteClick.bind(this)
        this.handleFavouriteClick = this.handleFavouriteClick.bind(this)
    }


    componentDidMount() {
        CharacterService.getAllCharactersWIthPaging(0)
            .then(response => {
                console.log(response.data)
                this.setState({
                    characters: response.data.content,
                    currentPage: response.data.pageable.pageNumber,
                    totalNumberOfPages: response.data.totalPages
                })
                console.log("componentDidMount " + this.state.currentPage)
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
                                    <td>
                                        {
                                            character.favouriteCharacter ? <img src={favourite_star} width={25} height={25} onClick={() => this.handleFavouriteClick(character.characterId)} /> : <img src={unfav_star} width={25} height={25} onClick={() => this.handleUnFavouriteClick(character.characterId)} />
                                        }
                                    </td>
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


    handleNextButtonClick() {
        if (this.state.totalNumberOfPages >= (this.state.currentPage + 1)) {
            CharacterService.getAllCharactersWIthPaging(this.state.currentPage + 1)
                .then(response => {
                    this.setState({
                        characters: response.data.content,
                        currentPage: response.data.pageable.pageNumber

                    })
                })
            console.log(this.state.currentPage)
        }
    }

    handlePreviousButtonClick() {
        if ((this.state.currentPage - 1) >= -1) {
            CharacterService.getAllCharactersWIthPaging(this.state.currentPage - 1)
                .then(response => {
                    this.setState({
                        characters: response.data.content,
                        currentPage: response.data.pageable.pageNumber
                    })
                })
            console.log(this.state.currentPage)
        }
    }

    handleUnFavouriteClick(characterId) {
        CharacterService.markCharacterAsFavourite(characterId, true)
        CharacterService.getAllCharactersWIthPaging(this.state.currentPage)
            .then(response => {
                this.setState({
                    characters: response.data.content,
                    currentPage: response.data.pageable.pageNumber
                })
            })
    }
    handleFavouriteClick(characterId) {
        CharacterService.markCharacterAsFavourite(characterId, false)
        CharacterService.getAllCharactersWIthPaging(this.state.currentPage)
            .then(response => {
                console.log(response.data)
                this.setState({
                    characters: response.data.content,
                    currentPage: response.data.pageable.pageNumber
                })
            })

    }

}

export default ShowAllCharacters