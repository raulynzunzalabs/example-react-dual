import { useEffect, useState } from "react"
import { IPokemon } from "../App"


export const useFetch = (url: string) => {

    const [first, setFirst] = useState<IPokemon[]>()

    useEffect(() => {
        const fetching = async () => {
            const data = (await fetch(url)).json()
            const res = await data
            setFirst(res.results)
        }

        fetching()

    }, [])

    return {
        first, setFirst
    }
}

