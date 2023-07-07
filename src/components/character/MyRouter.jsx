import React, { Component } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DropdownHousesComponent from "./DropdownHousesComponent"
import HomeComponent from "./HomeComponent";

class MyRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeComponent />}></Route>
                    <Route exact path="/dropdown" element={<DropdownHousesComponent />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default MyRouter;