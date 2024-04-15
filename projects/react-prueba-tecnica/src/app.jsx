
import { useCatImage } from "./hooks/UseCatImage";
import { useCatFact } from "./hooks/useCatFact";

const CAT_PREFIX_IMAGEN_URL = 'https://cataas.com'


export function App() {
   
    const {fact, getRamdonFactAndUpdateState} = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    
    const handleClick = async () =>{
        getRamdonFactAndUpdateState()
 
    }

    return (
        <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick}> Get in Fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${imageUrl}`} alt={`Imagen extraída usando las primeras tres palabras de ${fact}`} />}
        </main>
    );
}
