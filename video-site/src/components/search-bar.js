import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <i className="fa fa-search" aria-hidden="true"></i> <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }
}
export default SearchBar
