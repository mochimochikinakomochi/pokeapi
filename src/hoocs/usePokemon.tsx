import { useState } from "react";
import axios from "axios";
import { Pokemon } from "pokenode-ts";


export const usePokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon>()
    const [isFetchingPokemon, setIsFetchingPokemon] = useState(false)
    console.log(pokemon)
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    // idを受け取ってpokemonを更新
    async function fetchPokeapi ({pokemonID = "25"}: {pokemonID: string}) {
        //const pokemonID = id
        const url = baseUrl + pokemonID

        try {
            setIsFetchingPokemon(true)
            const response = await axios.get(url)
            const data = response.data
            setPokemon(data)
        } catch (error) {
            console.error(error)
        }
        setIsFetchingPokemon(false)
    }

    return {pokemon, fetchPokeapi, isFetchingPokemon}
}