import React from 'react'
import VerTodas from '../components/VerTodas/VerTodas' 

const Proximamente = () => {
  return (
    <div>
        <h1> Proximamente
            <VerTodas url= "/poximamente" api= { "https://api.themoviedb.org/3/movie/upcoming"}/>
        </h1>
    </div>
  )
}

export default Proximamente