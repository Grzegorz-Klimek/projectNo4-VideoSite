import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Grid} from 'react-bootstrap'

import './index.css'

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDnLq67jGMjUp1e84MYEqjVdHSQ1EELCmA'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null

        }

        this.videoSearch('Iron Maiden')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        return (
            <Grid fluid>
                <div className="col-sm-8 col-sm-offset-2">
                    <SearchBar
                        onSearchTermChange={term => this.videoSearch(term)}
                    />
                    <VideoDetail
                        video={this.state.selectedVideo}
                    />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}
                    />
                </div>
            </Grid>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
