import React from 'react';
import TrackList from '../Tracklist/Tracklist';

const SearchResults = (props) => {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <TrackList tracks={props.SearchResults} onAdd={props.onAdd} />
        </div>
    );
};

export default SearchResults;