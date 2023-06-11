import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Scrollbars } from "rc-scrollbars";
import InfiniteScroll from "react-infinite-scroller";
import { Pokemon } from "pokenode-ts";
import axios from "axios";

export const Infinity = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  console.log("pokemonList", pokemonList);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const sleep = (sec: number) =>
    new Promise((resolve) => setTimeout(resolve, sec * 1000));

  const loadMore = async (page: number) => {
    const url = baseUrl + page.toString();
    await sleep(0.1);
    console.log(hasMore);
    try {
      setIsFetching(true);
      const response = await axios.get(url);
      const data = response.data;
      setPokemonList((pre) => [...pre, data]);
      console.log(data);
      setHasMore(data.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  const items = (
    <ul>
      {pokemonList.map((pokemon) => {
        const pokemonID = pokemon.id.toString();
        const toUrl = "/PokemonList/" + pokemonID;
        return (
          <React.Fragment key={pokemon.id}>
            <div className="bg-white bg-opacity-75">
              <li className="">
                図鑑番号:{pokemon.id} 名前:
                <Link to={toUrl} className="">
                  {pokemon.name}
                </Link>
              </li>
            </div>
          </React.Fragment>
        );
      })}
    </ul>
  );

  const loader = (
    <div className="loader" key={0}>
      Loading...
    </div>
  );

  const root_style = {
    marginLeft: "50px",
    marginTop: "50px",
  };

  return (
    <div className="flex">
      <Scrollbars
        autoHeight
        autoHeightMin={100}
        autoHeightMax={400}
        className="max-w-fit"
      >
        <div style={root_style}>
          <InfiniteScroll
            pageStart={400}
            loadMore={loadMore}
            hasMore={!isFetching}
            loader={loader}
          >
            {items}
          </InfiniteScroll>
        </div>
      </Scrollbars>
      <Outlet />
    </div>
  );
};
