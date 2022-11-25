import React, {useState, useContext, useEffect} from "react";
import { AppContext } from "../Context/context";
import { NavLink } from "react-router-dom";


function CAREER(){
    const {SetPokemon, Pokemon ,Username, Score, Wins, Losses } = useContext(AppContext)
    const [Rank, SetRank] = useState('')

    useEffect (() => {
        if (Score < 5){
            SetRank(<img src="https://archives.bulbagarden.net/media/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png"></img>)
        } else if (Score >= 5 && Score < 10){
            SetRank(<img src="https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png"></img>)

        } else if (Score >= 10 && Score < 20){
            SetRank(<img src="https://archives.bulbagarden.net/media/upload/a/a8/Dream_Ultra_Ball_Sprite.png"></img>)
        } else {
            SetRank (<img src="https://archives.bulbagarden.net/media/upload/9/95/Dream_Master_Ball_Sprite.png"></img>)
        }
    })
    // const rank = () => {
    //     
        
    // }
    return(
            <div className="h-100 p-5" style={{backgroundImage:'url(https://wallpapers.com/images/hd/pokemon-bulbasaur-b2h9aqrrje6frkma.jpg)'}}>
                <div className="border rounded border-dark p-5 w-100 bg-light mb-3 cardPattern">   
                    <h1 className="gameText">Trainer Card</h1>
                    <div className="row bg-danger">
                        <h2 className="text-light">{Username}</h2>
                    </div>
                    <div className="row">
                        <div className="col p-2">
                            <h3 className="gameText">Correct: <span className="text-success">{Wins}</span> </h3>
                            <h3 className="gameText">Incorrect: <span className="text-danger">{Losses}</span> </h3>
                            <h3 className="gameText">Points: <span className="text-warning">{Score}</span></h3>
                        </div>
                        <div className="col">
                        <p className="row gameText">Rank: </p>
                        {Rank}
                        </div>
                    </div>
                </div>
                <NavLink to="/"><button className="btn btn-danger">Return</button></NavLink>
            </div>
    )
}

export default CAREER;