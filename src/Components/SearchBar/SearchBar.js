import React, { useCallback } from 'react';

function SearchBar() {

    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className='SerchBar'>
            <input placeholder='Enter a song title' onChange={handleTermChange} />
            <button className='SearcButton' onClick={search}>
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;