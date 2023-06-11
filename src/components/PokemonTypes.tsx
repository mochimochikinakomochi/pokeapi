import { Pokemon } from "pokenode-ts";


export const PokemonTypes = ({pokemon}: {pokemon?: Pokemon}) => {
    return (
        <div className="bg-white bg-opacity-75 border-2 m-2 flex h-8">
            <div className="text-lg">Type:&nbsp;</div>
            {pokemon?.types.map((item) => {
                return (
                    <div className={`flex-1 mr-2 rounded-md text-lg bg-${item.type.name}`}>
                        {item.type.name}
                    </div>
                )
            })}
        </div>
    )
}