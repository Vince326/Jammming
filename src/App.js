import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [searchResults, useSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("NewPlaylist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spofity.search(term).then(setSearchResults);

  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some(savedTrack) => savedTrack.id === track.id))
  return;

  setPlaylistTracks((prevTracks) => [...prevTracks, track]);
},
[playlistTracks]
  );

const removeTrack = useCallback(track) => {
  setPlaylistTrcks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
  );
}, []);

const updatePlaylist = useCallback(() => {
  const trackUris = playlistTracks.map((track) => track.uri);
})

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
}

export default App;
