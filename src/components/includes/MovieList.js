import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props) {
    return (
        <div className='movie__list'>
            <ul>
                {props.videos.map((video,index) => (
                    <MovieItem 
                        video={video}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default MovieList