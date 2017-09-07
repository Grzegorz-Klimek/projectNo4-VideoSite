import _ from 'lodash'
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

        this.videoSearch('Arch Enemy')
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
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <Grid fluid>
                <div className="row">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <SearchBar
                                onSearchTermChange={videoSearch}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <VideoDetail
                            video={this.state.selectedVideo}
                        />
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </Grid>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
