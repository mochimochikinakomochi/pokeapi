import { useRef, useEffect, useState } from "react";
import { usePokemon } from "../hoocs/usePokemon";
import { useParams } from "react-router-dom";
import { SvgSpinners180Ring } from '../components/SvgSpinners180Ring'

import { PreAndNextButton } from "../components/PreAndNextButton";
import { PokemonNoName } from "../components/PokemonNoName";
import { PokemonTypes } from "../components/PokemonTypes";



export const PokemonInfo = () => {
    const {ID} = useParams()
    const pokemonID: string = ID || "25"
    const {pokemon, fetchPokeapi, isFetchingPokemon} = usePokemon()
    const [isVisible, setIsVisible] = useState(true)
    const countRef = useRef(parseInt(pokemonID))

    useEffect(() => {
        fetchPokeapi({pokemonID})
        countRef.current = parseInt(pokemonID)

        // コンポーネントが読み込まれたときに一瞬だけ色を表示
        setTimeout(() => {
            setIsVisible(false)
        }, 1)
    }, [pokemonID])

    // クリックでidを更新
    const handleClick = (isNext: boolean) => {
        countRef.current = isNext ? countRef.current + 1 : countRef.current - 1
        console.log(countRef.current)
        const pokemonID = countRef.current.toString()
        fetchPokeapi({pokemonID})
    }

    return (
        <div className="flex-grow">
            <PreAndNextButton handleClick={handleClick as (isNext: boolean) => void} />
            <div className="grid place-items-center m-2 flex justify-center">
                <div className="border-4 border-black bg-white bg-opacity-75 rounded-full w-64 h-64 m-2 flex justify-center items-center">
                    {isFetchingPokemon ? <SvgSpinners180Ring className="w-16 h-16"/> : <img src={pokemon?.sprites?.front_default as string} className="w-64 h-64"/>}
                </div>
                <PokemonNoName pokemon={pokemon}/>
                <PokemonTypes pokemon={pokemon} />
            </div>
            <div>
                {isVisible && <p className="bg-normal bg-fire bg-water bg-grass bg-electric bg-ice bg-fighting bg-poison bg-ground bg-flying bg-psychic bg-bug bg-rock bg-ghost bg-dragon bg-dark bg-steel bg-fairy">0</p>}
            </div>
        </div>
    )
}