import { useState } from "react";
import axios from "axios";
import { Pokemon } from "pokenode-ts";


export const usePokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon>()
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    // idを受け取ってpokemonを更新
    const fetchPokeapi = ({pokemonID = "25"}: {pokemonID: string}) => {
        //const pokemonID = id
        const url = baseUrl + pokemonID
    
        axios.get(url)
        .then(response => {
            setPokemon(response.data)
        })
    }

    return {pokemon, fetchPokeapi}
}