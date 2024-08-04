import {products as inicialProducts} from './mocks/products.json'
import {Products} from './components/Products.jsx'
import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'


function App () {
   
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(inicialProducts)


  return (
    <>
    <Header />
    <Products products={filteredProducts} />
    <Footer/>
    </>
  )
}


export default App
 