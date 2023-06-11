import { Pokemon } from "pokenode-ts"

export const PokemonNoName = ({pokemon}: {pokemon: Pokemon | undefined}) => {
    return (
        <div className="bg-white bg-opacity-75 border-2 w-64 max-h-fit text-center">
            <p className="bg-white bg-opacity-75 text-lg">No.{pokemon?.id}</p>
            <p className="bg-white bg-opacity-75 text-4xl">{pokemon?.name}</p>
        </div>
    )
}