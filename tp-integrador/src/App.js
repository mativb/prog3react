import Footer from './components/Footer/Footer'
import { Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import detallePelicula from './pages/detallePelicula';
import mejorRating from './pages/mejorRating';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    
    <Navbar />
    <Switch>
      <Route path = "/" exact component ={Home}/>
      <Route path =" /detalle/id/:id" exact component= {detallePelicula}/>
      <Route path ="/rating" exact component = {mejorRating}/>
      <Route component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
