import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search-bar";

const API_KEY = 'AIzaSyDnLq67jGMjUp1e84MYEqjVdHSQ1EELCmA';

const App = () => {
    return <SearchBar />;
}

ReactDOM.render(<App />, document.querySelector('.container') );
