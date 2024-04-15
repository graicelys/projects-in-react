import { useEffect, useState } from "react"
import { getRamdonFact } from "../services/facts"



export function useCatFact ()  {

    const [fact, setFact] = useState()

    const getRamdonFactAndUpdateState = () => {

        getRamdonFact().then(newFact => setFact (newFact))

    }

    useEffect( getRamdonFactAndUpdateState, [])

    return { fact, getRamdonFactAndUpdateState}

}