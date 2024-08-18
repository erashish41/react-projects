import { useEffect, useState } from 'react';
import './index.css';

export const Pokemon = () => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon =  async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
               
        }
    }

    useEffect(()=> {
        fetchPokemon();
    }, [])

    
    return(
        <>
            <section>
                <header>Lets Catch Pokemon</header>
                <input type='text' autoComplete='off' ></input>
            </section>
            <section>

            </section>
        </>
    )
}