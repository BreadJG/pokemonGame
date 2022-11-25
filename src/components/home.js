import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/context";
import { NavLink } from "react-router-dom";

function HOME() {
    const {LoggedIn, SetLoggedIn ,Username, SetUsername, SetPokemon} = useContext(AppContext)

    let fetchpokemon = [];

    useEffect(() => {
     for (let i = 1; i < 151; i++) {
        try{
         fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
         .then((results) => results.json())
         .then((response) => fetchpokemon.push(response))}
         catch{alert('Error Loading POKéMON. Please Refresh Page')}
     }
     SetPokemon(fetchpokemon)
     },[]);
     
    function LogIn(){
        SetLoggedIn(true)
    }

    function LogOut(){
        SetLoggedIn(false)
        SetUsername('')
    }

    return(
        <div className="h-100">
            {LoggedIn ?
            <div className="row h-100">
                <div className="col-4 list-group bg-danger p-2">
                        <img className="mb-2" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="POKEMON LOGO"></img>
                        <NavLink className="list-group-item text-light bg-danger" to="/play" ><h2>PLAY</h2></NavLink>
                        <NavLink className="list-group-item text-light bg-danger" to="/pokedex"><h2>POKEDEX</h2></NavLink>
                        <NavLink className="list-group-item text-light bg-danger" to="/career"><h2>TRAINER CARD</h2></NavLink>
                        <NavLink className="list-group-item text-light bg-danger" to="/donate"><h2>DONATE</h2></NavLink>
                        <h2 className="list-group-item text-light bg-danger pointer" onClick={LogOut}>Log Out</h2>
                </div>
                <div className="col-8 text-center">
                    <h1 className="title m-0 ">Welcome {Username}!</h1>
                    <div className="pic-ctn m-1">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" className="img-fluid"/>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="" className="img-fluid"/>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>:
            <div className="text-center bg-danger h-100">
                <img className="mb-2 img-fluid" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="logo"></img>
                <form className="offset-4 col-4 gameText" onSubmit={LogIn}>
                    <input className="form-control mb-3 text-center" placeholder="Choose Username" type={'text'} onChange={e => SetUsername(e.target.value)} required></input>
                    <button className="btn btn-warning" type="submit">Log In</button>
                </form>
            </div>}
        </div>
    )

}

export default HOME;