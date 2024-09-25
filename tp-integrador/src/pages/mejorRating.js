import React from 'react'
import VerTodas from '../components/VerTodas/VerTodas' 

const MejorRating = () => {
  return (
    <div>
        <h1 className="titulo_home"> Películas con mejor rating
            <VerTodas url= "/rating" api= { "https://api.themoviedb.org/3/movie/top_rated"}/>
        </h1>
    </div>
  )
}

export default MejorRating