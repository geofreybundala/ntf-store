import Items from "../components/cards/Items";
import Header from "../components/header/header";
import Welcome from "../components/landing/Welcome";
const Home = () => {
   return (
    <div>
        <Header/>
        <Welcome/>
        <Items title="New in"/>
    </div>
   ) 
}

export default Home;