import React, { useContext, useState } from "react";
import GameCard from "./GameCard";
import { AppContext } from "../Context/context";
import { NavLink } from "react-router-dom";

function POKEDEX(){
    const {SetPokemon, Pokemon} = useContext(AppContext)
    const [Show, SetShow] = useState(false)

    const pokemonCards = Pokemon.map((item, i) =>
        <GameCard 
        key ={i}
        pokemonName={Pokemon[i].name}
        image={Pokemon[i].sprites.front_default}
        type={Pokemon[i].types[0].type.name}
        ability={Pokemon[i].abilities[0].ability.name}
        />
    )
    
    function _logbutton() {
        SetShow(!Show);
    }

    return(
        <div className="text-center" style={{backgroundColor:'red'}}>
            <img src="https://pokedexproject1.herokuapp.com/images/Pokedex.png"></img>
            <br></br>
            <button className="row btn btn-success m-3" onClick={_logbutton}>Power</button>
            <div className="border border-secondary mx-3 rounded mb-3" style={{Height:'25%', backgroundColor:'gray'}}>
                <div className="m-3 overflow-auto" style={{minHeight:350, maxHeight:350, backgroundColor:'black'}}>
                {Show ? <div className="overflow-auto screenOn" style={{maxHeight:350, backgroundColor:'darkSeaGreen'}}>{pokemonCards}</div>:
                <div className="overflow-auto screenOff" style={{minHeight:350, maxHeight:350, backgroundColor:'black'}}></div>}  
                </div>
            </div>
            <NavLink to='/' className="btn btn-secondary m-3">HOME</NavLink>
        </div>
    )
}

export default POKEDEX;