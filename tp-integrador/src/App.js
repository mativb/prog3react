import Footer from './components/Footer/Footer'
import { Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';

function App() {
  return (
    <>
    
    <Navbar />
    <Switch>
      <Route path = "/" exact component ={Home}/>
      
    </Switch>
    <Footer />
    </>
  );
}

export default App;
