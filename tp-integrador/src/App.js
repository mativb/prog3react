import Footer from './components/Footer/Footer'
import { Switch, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home from './pages/Home';
import MejorRating from './pages/MejorRating';
import DetallePelicula from './components/DetallePelicula/DetallePelicula';
import NotFound from "./pages/NotFound";
import Proximamente from './pages/Proximamente';
import Favoritos from './pages/Favoritos';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
    
    <Header />
    
    <Switch>
      <Route path = "/" exact component ={Home}/>
      <Route path="/detalle/id/:IDpelicula" exact component={DetallePelicula} />
      <Route path ="/rating" exact component = {MejorRating}/>
      <Route path ="/favoritos" exact component = {Favoritos}/>
      <Route path ="/proximamente" exact component = {Proximamente}/>
      <Route path ="/search" exact component = {SearchResults}/>

      <Route component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;