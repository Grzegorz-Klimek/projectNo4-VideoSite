import React from 'react'

const VideoDetail = ({video}) => {
    if(!video) {
        return (
            <div>
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            </div>
        )
    }

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail