import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from "./spotify";

import { useDataLayerValue } from './DataLayer';

const spotify =  new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
   
    const hash = getTokenFromUrl(); 
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user, "...user..")

        dispatch({
          type: 'SET_USER',
          payload: user
        })

      })
    }

  }, []);

  console.log(user, "..user context api.")

  return (
    <div className="App">
      {
        token ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
