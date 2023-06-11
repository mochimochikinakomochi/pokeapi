import { useState } from "react";
import { Pokemon } from "pokenode-ts";
import axios from "axios";


export const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [isFetchingPokemonList, setIsFetchingPokemonList] = useState(false)
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    async function fetchPokemonListAPI({startID = 1, endID = startID + 30}: {startID: number, endID ?: number}) {
        let subPokemonList: Pokemon[] = []
        for(let i = startID; i < endID; i++) {
            const url = baseUrl + i.toString()
            try {
                setIsFetchingPokemonList(true)
                const response = await axios.get(url)
                const data = response.data
                subPokemonList = [...subPokemonList, data]
            } catch (error) {
                console.error(error)
            }
        }
        setIsFetchingPokemonList(false)
        setPokemonList(subPokemonList)
    }

    async function appendPokemonList({startID = 1, endID = startID + 30}: {startID: number, endID ?: number}) {
        let subPokemonList: Pokemon[] = []
        for(let i = startID; i < endID; i++) {
            const url = baseUrl + i.toString()
            try {
                setIsFetchingPokemonList(true)
                const response = await axios.get(url)
                const data = response.data
                subPokemonList = [...subPokemonList, data]
            } catch (error) {
                console.error(error)
            }
        }
        setIsFetchingPokemonList(false)
        setPokemonList((pre) => [...pre, ...subPokemonList])
    }

    return {pokemonList, isFetchingPokemonList, fetchPokemonListAPI, appendPokemonList}
}