import React, { useEffect, useRef } from "react"
import { IPokemon } from "../App"

export const Card: React.FC<IPokemon> = ({ name, url = "" }) => {

    const first = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // first.current!.style.backgroundColor = "aqua"
    }, [])

    return (
        <div ref={first}>
            <li>{name}</li>
            <button onClick={() => console.log(name)}>Print</button>
        </div>

    )
}
