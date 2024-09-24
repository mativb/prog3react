import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";
import "../App.css"; 

const Home = (props) => {
  return (
    <>
    
    <div className="home">
    <img src='./bannerci.jpg' alt=" banner"className="banner"/>
      <h1 className="tituloHome">Películas con mejor rating</h1>
      <PeliculaGrid api={"https://api.themoviedb.org/3/movie/top_rated"} link={"/rating"} />

      <h1 className="tituloHome">Próximamente</h1>
      <PeliculaGrid api={"https://api.themoviedb.org/3/movie/upcoming"} link={"/proximamente"} />
    </div>
    </>
  );
}

export default Home;
