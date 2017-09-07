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
        <div className="video-detail col-md-7 panel">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={url} src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div><h1>{video.snippet.title}</h1></div>
                <div><h2>{video.snippet.description}</h2></div>
            </div>
        </div>
    )
}

export default VideoDetail