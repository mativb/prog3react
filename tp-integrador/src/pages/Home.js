import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";
import "../App.css"; 
import SearchForm from "../components/SearchForm/SearchForm";
const Home = (props) => {
  return (
    <>
    
    <div className="home">
    <SearchForm history={props.history}/>
    <img src='./bannerci.jpg' alt=" banner"className="banner"/>
      <h1 className="titulo_home">Películas con mejor rating</h1>
      <PeliculaGrid api={"https://api.themoviedb.org/3/movie/top_rated"} link={"/rating"} />

      <h1 className="titulo_home">Próximamente</h1>
      <PeliculaGrid api={"https://api.themoviedb.org/3/movie/upcoming"} link={"/proximamente"} />
    </div>
    </>
  );
}

export default Home;
