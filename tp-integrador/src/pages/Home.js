import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid"


const Home = (props) => {
    return(
        <div className="cajapelicula">
        <h1>Películas con mejor rating</h1>
        <PeliculaGrid api= { "https://api.themoviedb.org/3/movie/top_rated"} link={"/rating"} />
        
        <h1>Próximamente</h1>
        <PeliculaGrid api ={"https://api.themoviedb.org/3/movie/upcoming"} link={"/proximamente"} />
        </div>
    )
}


export default Home 