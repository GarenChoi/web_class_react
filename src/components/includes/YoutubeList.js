import React from 'react'
import YoutubeItem from './YoutubeItem'

function YoutubeList(props) {
    return (
        <div className='youtube__list'>
            <ul>
                {props.videos.map((video,index) => (
                    <YoutubeItem 
                        video={video}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default YoutubeList