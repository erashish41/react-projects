import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchPokemon = async () => {
        try{
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);
            
            const detailedPokemonData = data.results.map( async (currElm) => {
                const res = await fetch(currElm.url);
                const data = await res.json();
                // console.log(data);

                return data;
                                
            })
            // console.log(detailedPokemonData);

            const detailedResearched = await Promise.all(detailedPokemonData);
            console.log(detailedResearched);
            setPokemon(detailedResearched);
            setLoading(false);
        }catch(error){
            console.log(error);
            setError(error);
            setLoading(false);

        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(error){
        return(
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <div>
                <ul className="cards">
                    {pokemon.map((currPokemon) => {
                        return (
                            <PokemonCard key={currPokemon.id} pokemonData = {currPokemon} />
                        )
                    })}
                </ul>
            </div>
            {/* <input type=" text" className="inputPokemon" autoComplete="off"></input> */}

        </section>
    )
}