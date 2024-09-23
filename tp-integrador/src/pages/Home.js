import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";
import "../App.css"; 

const Home = (props) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Películas con mejor rating</h1>
      <PeliculaGrid api={"https://api.themoviedb.org/3/movie/top_rated"} link={"/rating"} />

      <h1 className="home-title">Próximamente</h1>
      <PeliculaGrid api={"https://api.themoviedb.org/3/movie/upcoming"} link={"/proximamente"} />
    </div>
  );
}

export default Home;
