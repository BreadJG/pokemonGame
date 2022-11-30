import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import POKEDEX from "./components/pokedex";
import PLAY from "./components/play";
import CAREER from "./components/career";
import HOME from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AppContext } from "./Context/context";
import DONATIONS from "./components/donations";
import PAGENOTFOUND from "./components/pageNotFound";

function App() {
  const [Pokemon, SetPokemon] = useState([])
  const [Score, SetScore] = useState(0)
  const [Username, SetUsername] = useState('')
  const [LoggedIn, SetLoggedIn] = useState(false)
  const [Wins, SetWins] = useState (0)
  const [Losses, SetLosses] = useState (0)

  let fetchpokemon = []
  useEffect(() => {
    if (!fetchpokemon.length) { 
        for (let i = 1; i < 152; i++) {  
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((results) => results.json())
            .then((response) => fetchpokemon.push(response))
        }
        SetPokemon(fetchpokemon)      
    }
},[]);

  return (
    <AppContext.Provider value={{Pokemon, SetPokemon, Score, SetScore, Username, SetUsername, LoggedIn, SetLoggedIn, Wins, SetWins, Losses, SetLosses }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HOME/>}/>
            <Route path="pokedex" element={<POKEDEX />} />
            <Route path="play" element={<PLAY />} />
            <Route path="career" element={<CAREER />} />
            <Route path="donate" element={<DONATIONS />} />
            <Route path="*" element={<PAGENOTFOUND />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
