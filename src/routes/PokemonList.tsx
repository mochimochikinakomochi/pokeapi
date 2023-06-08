import React from 'react'
import { useRef, useEffect } from "react";
import { usePokemonList } from "../hoocs/usePokemonList";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Scrollbars } from 'rc-scrollbars';
import { BsChevronDoubleDown } from 'react-icons/bs'


export const PokemonList = () => {
    const {pokemonList, isFetching, fetchPokemonListAPI, appendPokemonList} = usePokemonList()
    const startIDRef = useRef(1)

    useEffect(() => {
        const startID = startIDRef.current
        fetchPokemonListAPI({startID})
        startIDRef.current += 30
    }, [])

    const loadMore = () => {
        if (!isFetching) {
            const startID = startIDRef.current
            appendPokemonList({startID})
            startIDRef.current += 30
        }
    }


    return (
        <div className='flex'>
            <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={400} className='max-w-fit bg-white bg-opacity-75'>
                {pokemonList.map((pokemon) =>{
                    const pokemonID = pokemon.id.toString()
                    const toUrl = "/PokemonList/" + pokemonID
                    return (
                        <React.Fragment >
                            <div className=''>
                                <li className=''>
                                    図鑑番号:{pokemon.id} 名前:
                                    <Link to={toUrl} className='text-blue-800'>{pokemon.name}</Link>
                                </li>
                            </div>
                        </React.Fragment>
                    )
                })}
                <button onClick={() => loadMore()} className='w-full hover:bg-gray-400'>
                    <div className='flex items-center justify-center w-full'>
                        <BsChevronDoubleDown />
                    </div>
                </button>
            </Scrollbars>
            <Outlet />
        </div>
    )
}