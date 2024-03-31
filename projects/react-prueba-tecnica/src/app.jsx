import { useEffect, useState } from "react"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_IMAGEN = `https://cataas.com/cat/says/hello&json=true`
const CAT_PREFIX_IMAGEN_URL = `https://cataas.com`
export function App () {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            const threeFirstWord = fact.split(' ', 3).join(' ')
            console.log(threeFirstWord)
            fetch(`https://cataas.com/cat/says/${encodeURIComponent(threeFirstWord)}?hello=true&json=true`)

            .then(res => res.json())
            .then(response => {
                console.log(response)
                const { url } = response
                setImageUrl(url)
                console.log(url)
            })
        })
        

    }, [])

    return (
        <main>
            <h1>App de gatos</h1>
           { fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGEN_URL}${imageUrl}`} alt={`Image extracted using the fist thee words for ${fact}`} />}

        </main>
        
    )
}
