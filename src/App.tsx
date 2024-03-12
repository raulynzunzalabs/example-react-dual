import { useEffect, useState } from "react"
import { Card } from "./components/Card"
import { useFetch } from "./hooks/useFetch"
import color from './App.module.css'

export interface IPokemon {
  name: string,
  url: string
}

const App = () => {
  const { first } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")

  return (
    <ul className={color.background}>
      {
        first?.map((pokemon, index) => (
          <Card name={pokemon.name} url={pokemon.url} key={index} />
        ))
      }
    </ul>
  )
}

export default App
