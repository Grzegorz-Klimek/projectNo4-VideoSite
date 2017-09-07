import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    render() {
        return (
            <div className="search-bar panel">
                <h1>Simple<span>VideoApp</span></h1>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar
