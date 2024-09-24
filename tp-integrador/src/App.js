import Footer from './components/Footer/Footer'
import { Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import DetallePelicula from './components/DetallePelicula/DetallePelicula.js';
import mejorRating from './pages/MejorRating';
import NotFound from "./pages/NotFound";
import SearchForm from './components/SearchForm/SearchForm';
import Proximamente from './pages/Proximamente';
import Favoritos from './pages/Favoritos';
function App() {
  return (
    <>
    
    <Navbar />
    <SearchForm />
    <Switch>
      <Route path = "/" exact component ={Home}/>
      <Route path="/detalle/id/:IDpelicula" exact component={DetallePelicula} />
      <Route path ="/rating" exact component = {mejorRating}/>
      <Route path ="/favoritos" exact component = {Favoritos}/>
      <Route path ="/proximamente" exact component = {Proximamente}/>
      <Route component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;