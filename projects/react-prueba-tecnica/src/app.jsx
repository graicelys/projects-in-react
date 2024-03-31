import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGEN_URL = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);

                const threeFirstWord = fact.split(' ', 3).join(' ');
                console.log(threeFirstWord);
                fetch(`${CAT_PREFIX_IMAGEN_URL}/cat/says/${encodeURIComponent(threeFirstWord)}?hello=true`)
                    .then(res => {
                        setImageUrl(res.url); // Set image URL directly here
                        console.log(res.url);
                    });
            });
    }, []);

    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${imageUrl}`} alt={`Imagen extraída usando las primeras tres palabras de ${fact}`} />}
        </main>
    );
}
