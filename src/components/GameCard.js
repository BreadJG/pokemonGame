import React, {Component, useState} from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import './GameCard.css';

function GameCard (props) {
const [flip, setFlip] = useState(true)

const _cardFlip = () => {setFlip(!flip);}


const innerClass = flip ? 'GameCardInner flipped' : 'GameCardInner';    
return(
    // <div className='GameCard' onClick={_cardFlip}>
    //     <div className={innerClass}>
    //     {flip ?
    //         <div className="GameCardFront">
    //             <div className="text-center">
    //                 <p className="frontInner">{props.pokemonName}</p>
    //                 <img className="frontImage" src={props.image}></img>
    //                 <p className="pokemonInfo">Type: {props.type} </p>
    //                 <p className="pokemonInfo">Ability: {props.ability}</p>
    //             </div>
    //         </div>:
    //         <div className="GameCardBack">
    //             <img className="CardImage" src="https://cdn.pixabay.com/photo/2019/11/18/15/46/pokemon-4635112__480.png" alt="" />
    //         </div>
    //     }
    // </div> 
    <div className='GameCard' onClick={_cardFlip}>
    <div className={innerClass}>
    {flip ?
        <div className="GameCardFront">
            <div className="text-center">
                <p className="frontInner">{props.pokemonName}</p>
                <img className="frontImage" src={props.image}></img>
                <p className="pokemonInfo">Type: {props.type} </p>
                <p className="pokemonInfo">Ability: {props.ability}</p>
            </div>
        </div>:
        <div className="GameCardBack">
            <img className="CardImage" src="https://cdn.pixabay.com/photo/2019/11/18/15/46/pokemon-4635112__480.png" alt="" />
        </div>
    }
</div> 
</div>)                   
}


export default GameCard;