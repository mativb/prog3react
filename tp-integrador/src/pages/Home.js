import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid"


const Home = (props) => {
    return(
        <>
        <h1>Películas con mejor rating</h1>
        <PeliculaGrid api= { "https://api.themoviedb.org/3/movie/top_rated"} />
        
        <h1>Próximamente</h1>
        <PeliculaGrid api ={"https://api.themoviedb.org/3/movie/upcoming"} />
        </>
    )
}


export default Home 