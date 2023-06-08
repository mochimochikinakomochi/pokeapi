import React from 'react'
import { useRef, useEffect } from "react";
import { usePokemonList } from "../hoocs/usePokemonList";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Scrollbars } from 'rc-scrollbars';


export const PokemonList_alpha = () => {
    const {pokemonList, fetchPokemonListAPI} = usePokemonList()
    const startIDRef = useRef(387)
    console.log("pokemonList", pokemonList)

    useEffect(() => {
        const startID = startIDRef.current
        fetchPokemonListAPI({startID})
    }, [])


    return (
        <div className='flex'>
            <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={400} className='max-w-fit'>
                {pokemonList.map((pokemon) =>{
                    const pokemonID = pokemon.id.toString()
                    const toUrl = "/PokemonList/" + pokemonID
                    return (
                        <React.Fragment >
                            <div className='bg-white bg-opacity-75'>
                                <li className=''>
                                    図鑑番号:{pokemon.id} 名前:
                                    <Link to={toUrl} className=''>{pokemon.name}</Link>
                                </li>
                            </div>
                        </React.Fragment>
                    )
                })}
            </Scrollbars>
            <Outlet />
        </div>
    )
}