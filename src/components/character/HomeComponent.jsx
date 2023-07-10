import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import welcome_img from "./images/Welcome.jpg"
class HomeComponent extends Component {

    render() {
        return (
            <div className="container">
                <HeaderComponent />
                <div className="container">
                    <img src={welcome_img} width={500} height={500}></img>
                </div>
            </div>
        )
    }

}
export default HomeComponent