import React, { Component } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DropdownHousesComponent from "./DropdownHousesComponent"
import HomeComponent from "./HomeComponent";
import ShowAllCharacters from "./ShowAllCharacters";
import FavouriteCharacters from "./FavouriteCharacters";

class MyRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeComponent />}></Route>
                    <Route exact path="/dropdown" element={<DropdownHousesComponent />}></Route>
                    <Route exact path="/showAll" element={<ShowAllCharacters />}></Route>
                    <Route exact path="/favouriteCharacter" element={<FavouriteCharacters />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default MyRouter;