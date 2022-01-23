import Items from "../components/cards/Items";
import Header from "../components/header/header";
import Show from "../components/product/Show";
const Product = () => {
   return (
    <div>
        <Header/>
        <Show/>
        <Items title="Related Items"/> 
    </div>
   ) 
}

export default Product;