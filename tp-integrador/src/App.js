import Footer from './components/Footer/Footer'
import { Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import detallePelicula from './pages/detallePelicula';
import mejorRating from './pages/MejorRating';
import NotFound from "./pages/NotFound";
import SearchForm from './components/SearchForm/SearchForm';
import Proximamente from './pages/Proximamente';
function App() {
  return (
    <>
    
    <Navbar />
    <SearchForm />
    <Switch>
      <Route path = "/" exact component ={Home}/>
      <Route path =" /detalle/id/:id" exact component= {detallePelicula}/>
      <Route path ="/rating" exact component = {mejorRating}/>
      <Route path ="/proximamente" exact component = {Proximamente}/>
      <Route component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;