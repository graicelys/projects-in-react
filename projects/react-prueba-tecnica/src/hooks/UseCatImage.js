import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGEN_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {

        if (!fact) return
    
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)
    
        fetch(`${CAT_PREFIX_IMAGEN_URL}/cat/says/${encodeURIComponent(threeFirstWord)}?hello=true`)
        .then(res => {
            setImageUrl(res.url); // Establecer la URL de la imagen directamente aquí
            console.log(res.url);
        })
    
    },[fact])

    return { imageUrl }

}