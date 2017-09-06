import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from "./components/search-bar"
import YTSearch from 'youtube-api-search'

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
            <div>
                <SearchBar/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
