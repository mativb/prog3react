import Footer from './components/Footer/Footer'
import { Switch, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home from './pages/Home';
import detallePelicula from './pages/detallePelicula';
import mejorRating from './pages/mejorRating';
import NotFound from "./pages/NotFound";
import SearchForm from './components/SearchForm/SearchForm';
import Proximamente from './pages/Proximamente';
function App() {
  return (
    <>
    
    <Header />
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