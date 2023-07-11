import React, { Component } from "react";
import CharacterService from "./api/CharacterService";
import HeaderComponent from "./HeaderComponent";

class FavouriteCharacters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            currentPage: 0,
            totalNumberOfPages: 0

        }
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this)

    }

    componentDidMount() {
        CharacterService.getFavouriteCharactersWithPaging(0)
            .then(response => {
                console.log(response.data.pageable.pageNumber)
                this.setState({
                    characters: response.data.content,
                    currentPage: response.data.pageable.pageNumber,
                    totalNumberOfPages: response.data.totalPages
                })
            })
    }

    render() {
        return (
            <div className="container">
                <HeaderComponent />
                <table className="table">
                    <thead>
                        <th>CharacterID</th>
                        <th>CharacterName</th>
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

    handleNextButtonClick() {
        if (this.state.totalNumberOfPages >= (this.state.currentPage + 1)) {
            CharacterService.getFavouriteCharactersWithPaging(this.state.currentPage + 1)
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
            CharacterService.getFavouriteCharactersWithPaging(this.state.currentPage - 1)
                .then(response => {
                    this.setState({
                        characters: response.data.content,
                        currentPage: response.data.pageable.pageNumber
                    })
                })
            console.log(this.state.currentPage)
        }
    }


}

export default FavouriteCharacters