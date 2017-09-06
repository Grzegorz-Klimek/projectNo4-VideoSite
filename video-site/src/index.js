import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from "./components/search-bar"
import YTSearch from 'youtube-api-search'

import { Grid } from 'react-bootstrap'

const API_KEY = 'AIzaSyDnLq67jGMjUp1e84MYEqjVdHSQ1EELCmA'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { videos: [] }
        YTSearch({key: API_KEY, term: 'Iron Maiden'}, (videos) => {
            this.setState({ videos })
        })
    }

    render() {
        return (
            <Grid fluid>
                <div>
                    <SearchBar/>
                </div>
            </Grid>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
