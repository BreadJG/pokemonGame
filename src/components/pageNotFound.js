import React from "react";
import { NavLink } from "react-router-dom";

function PAGENOTFOUND() {
    return (
        <div className="m-0 h-100 text-center p-5">
            <div className="row-7 justify-content-center mb-3">
                <img src="http://31.media.tumblr.com/e091410fd2fd6f9deb2152cf142dc8d2/tumblr_mt6yzeqkTw1sc0hh3o1_250.gif" style={{width:'50%'}}></img>
                <h1 className="m-2">A sleeping POKéMON blocks the way !</h1>
            </div>
            <NavLink className="btn btn-secondary" to={"/"}>Find PokeFlute</NavLink>
        </div>
    )
}

export default PAGENOTFOUND;