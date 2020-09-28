import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from "./spotify";

import { useDataLayerValue } from './DataLayer';

const spotifyApi =  new SpotifyWebApi();

function App() {
  console.log("...token, dispatch...")
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
   
    const hash = getTokenFromUrl(); 
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      spotifyApi.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        payload: _token
      })

      spotifyApi.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          payload: playlists
        });
      });

      spotifyApi.getPlaylist("0Z0eTWH2SwI7G7YbOTyWdv").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotifyApi.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotifyApi,
      });

    }

  }, [token, dispatch]);

  return (
    <div className="App">
      {
        token ? <Player spotify={spotifyApi} /> : <Login />
      }
    </div>
  );
}

export default App;
