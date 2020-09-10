import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import Player from './Player';
import { actionType } from './reducer';
import { getTokenFromResponse } from './Spotify';
import { SongState } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, settoken] = useState('');

  const { state, dispatch } = SongState();
  console.log(state);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const token = hash.access_token;
    console.log(token);

    if (token) {
      settoken(token);
    }

    spotify.setAccessToken(token);

    spotify.getMe().then((user) =>
      dispatch({
        type: actionType.SET_USER,
        payload: user,
      }),
    );
  }, [dispatch]);

  return <div className='App'>{token ? <Player /> : <Login />}</div>;
}

export default App;
