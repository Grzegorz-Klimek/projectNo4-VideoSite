import React from 'react'
import VideoListItem from './video-list-item'

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}/>
        )
    })

    return (
        <ul className="list-group col-md-5 panel">
            {videoItems}
        </ul>
    )
}

export default VideoList