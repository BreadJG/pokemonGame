import React, { useContext, useState } from "react";
import GameCard from "./GameCard";
import { AppContext } from "../Context/context";
import { NavLink } from "react-router-dom";

function PLAY() {
    const {SetPokemon, Pokemon, SetScore, Score, Username, SetWins, Wins, SetLosses, Losses} = useContext(AppContext)
    const [FirstCard, SetFirstCard] = useState(0);
    const [SecondCard, SetSecondCard] = useState(0);
    const [GameStart, SetGameStart] = useState(false);
    const [Correct, SetCorrect] = useState(false)
    const [Wrong, SetWrong] = useState(false)

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function _deal () {
        SetGameStart(true)
        SetFirstCard(randomNumberInRange(1,150));
        SetSecondCard(randomNumberInRange(1,150));
        while (FirstCard === SecondCard) {
            SetFirstCard(randomNumberInRange(1,150));
        }
    }
    
    async function _left() {
        if (GameStart){
            const delay = ms => new Promise(
                resolve => setTimeout(resolve, ms)
            );
            if (Pokemon[FirstCard].weight > Pokemon[SecondCard].weight){
                SetScore(Score + 1);
                SetCorrect(true)
                await delay(1500);
                SetCorrect(false)
                SetWins(Wins + 1)
                _deal()
            } else {
                SetScore(Score - 1)
                SetWrong(true)
                await delay(1500);
                SetWrong(false)
                _deal()
                SetLosses(Losses + 1)
            }
        } else {
            alert('Click Deal')
        }
    }

    async function _right() {
        if (GameStart){
            const delay = ms => new Promise(
                resolve => setTimeout(resolve, ms)
            );
            if (Pokemon[FirstCard].weight < Pokemon[SecondCard].weight){
                SetScore(Score + 1);
                SetCorrect(true)
                await delay(1500);
                SetCorrect(false)
                SetWins(Wins + 1)
                _deal()
            } else {
                SetScore(Score - 1)
                SetWrong(true)
                await delay(1500);
                SetWrong(false)
                SetLosses(Losses + 1)
                _deal()
            }
        } else {
            alert('Click Deal')
        }
    }

    return(
        <div className="m-0 p-5 h-100" style={{backgroundColor:"darkGray"}}>
        <div className="row bg-dark m-4" style={{minHeight:450}}>
            <div className="m-3 col p-2 text-center" style={{backgroundColor:"darkSeaGreen"}}>
                <div className="col gameText">Score: {Score}</div>
                <div className="col text-light gameText">Which Pokemon is heavier?</div>
                {GameStart ?
                <div className="col justify-content-center d-flex">
                {Correct ? <div className="text-success col">
                                <div className="indicator">YES</div>
                                <div>{Pokemon[FirstCard].weight /10} kg</div>
                            </div>:null}
                {Wrong ? <div className="text-danger col">
                            <div className="indicator">NOPE</div>
                            <div>{Pokemon[FirstCard].weight /10} kg</div>
                        </div>:null}
                <GameCard 
                key ={FirstCard}
                pokemonName={Pokemon[FirstCard].name}
                image={Pokemon[FirstCard].sprites.front_default}
                type={Pokemon[FirstCard].types[0].type.name}
                ability={Pokemon[FirstCard].abilities[0].ability.name}
                />

                <GameCard 
                key ={SecondCard}
                pokemonName={Pokemon[SecondCard].name}
                image={Pokemon[SecondCard].sprites.front_default}
                type={Pokemon[SecondCard].types[0].type.name}
                ability={Pokemon[SecondCard].abilities[0].ability.name}
                />
                {Correct ? <div className="text-success col">
                                <div className="indicator">YES</div>
                                <div>{Pokemon[SecondCard].weight /10} kg</div>
                            </div>:null}
                {Wrong ? <div className="text-danger col">
                            <div className="indicator">NOPE</div>
                            <div>{Pokemon[SecondCard].weight /10} kg</div>
                        </div>:null}
                </div> :
                <div className="col justify-content-around">
                    <GameCard/>
                    <GameCard/>
                </div>}
            </div>
            <h2 className="text-light text-center gameText">{Username}</h2>
        </div>
        <div className="row justify-content-center">
            <button className="btn btn-success gameText col-2 mx-2" onClick={_deal}>DEAL</button>
            <button className="btn btn-dark gameText col-2 mx-2" onClick={_left}>LEFT</button>
            <button className="btn btn-dark gameText col-2 mx-2" onClick={_right}>RIGHT</button>
            <NavLink className="btn btn-danger gameText col-2 mx-2" to="/">RUN</NavLink>
        </div>
    </div>
    )
}

export default PLAY