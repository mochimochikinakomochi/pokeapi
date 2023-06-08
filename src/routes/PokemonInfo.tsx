import { useRef, useEffect } from "react";
import { usePokemon } from "../hoocs/usePokemon";
import { useParams } from "react-router-dom";



export const PokemonInfo = () => {
    const {ID} = useParams()
    const pokemonID: string = ID || "25"
    const {pokemon, fetchPokeapi} = usePokemon()
    const countRef = useRef(parseInt(pokemonID))
    console.log("countRef", countRef.current)

    useEffect(() => {
        fetchPokeapi({pokemonID})
        countRef.current = parseInt(pokemonID)
    }, [pokemonID])

    // クリックでidを更新
    const handleClick = () => {
        countRef.current += 1
        const pokemonID = countRef.current.toString()
        fetchPokeapi({pokemonID})
    }

    return (
        <div className="flex-grow">
            <div className="flex justify-center">
                <button onClick={() => handleClick()} className='bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-2'>NEXT POKEMON</button>
            </div>
            <div className="grid place-items-center">
                <div className="border-4 border-black bg-white bg-opacity-75 rounded-full w-64 h-64">
                    <img src={pokemon?.sprites?.front_default as string} className=" w-64 h-64"/>
                </div>
                <p className="bg-white bg-opacity-75 text-lg">図鑑番号:{pokemon?.id}</p>
                <p className="bg-white bg-opacity-75 text-xl">名前:{pokemon?.name}</p>
            </div>
        </div>
    )
}