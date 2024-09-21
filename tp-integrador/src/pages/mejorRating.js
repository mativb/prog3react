import React from 'react'
import PeliculaGrid from '../components/PeliculaGrid/PeliculaGrid' 

const mejorRating = () => {
  return (
    <div>
        <h1> Todas las películas con mejor rating
            <PeliculaGrid url= "/rating"/>
        </h1>
    </div>
  )
}

export default mejorRating