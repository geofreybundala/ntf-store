import Items from "../components/cards/Items";
import Header from "../components/header/header";
import Welcome from "../components/landing/Welcome";
const Home = () => {
   return (
    <div>
        <Header/>
        <Welcome/>
        {/* <Items title="New in"/>
        <Items title="Special offer"/>
        <Items title="Recommended for you"/> */}
    </div>
   ) 
}

export default Home;