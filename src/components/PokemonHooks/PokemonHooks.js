import React, { useState, useEffect } from 'react'



export default function PokemonHooks() {
const [db, setDb] = useState([]);

useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon?limit=20"
        fetch(url)
        .then(res => res.json())
        .then(pokemons => {
        console.log(pokemons)
            pokemons.results.forEach( function (pokemon) {
            })

        })
}, [])


    return (
        <div>
            <h3>Pruebas</h3>
        </div>
    )
}



